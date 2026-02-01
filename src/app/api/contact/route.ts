import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

interface ValidationError {
  field: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone: string): boolean {
  if (!phone) return true;
  const re = /^[\d\-+()]+$/;
  return re.test(phone);
}

function validateFormData(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.name || !data.name.trim()) {
    errors.push({ field: 'name', message: 'お名前を入力してください' });
  }

  if (!data.email || !data.email.trim()) {
    errors.push({ field: 'email', message: 'メールアドレスを入力してください' });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'メールアドレスの形式が正しくありません' });
  }

  if (data.phone && !validatePhone(data.phone)) {
    errors.push({ field: 'phone', message: '電話番号の形式が正しくありません' });
  }

  if (!data.message || !data.message.trim()) {
    errors.push({ field: 'message', message: 'ご相談内容を入力してください' });
  } else if (data.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'ご相談内容は10文字以上で入力してください' });
  }

  return errors;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // サーバーサイドバリデーション
    const errors = validateFormData(body);
    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // ここで実際のメール送信や外部サービスへの連携を行う
    // 例: SendGrid, Resend, AWS SES, Slack通知など
    //
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `【お問い合わせ】${body.company || body.name}様より`,
    //   text: `
    //     お名前: ${body.name}
    //     メール: ${body.email}
    //     会社名: ${body.company || 'なし'}
    //     電話番号: ${body.phone || 'なし'}
    //
    //     お問い合わせ内容:
    //     ${body.message}
    //   `,
    // });

    // 開発環境ではコンソールに出力
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      name: body.name,
      email: body.email,
      company: body.company || 'なし',
      phone: body.phone || 'なし',
      message: body.message,
    });

    return NextResponse.json({
      success: true,
      message: 'お問い合わせを受け付けました',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
