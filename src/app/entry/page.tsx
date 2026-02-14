"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeInUp } from "@/components/animations";
import { recruit, company } from "@/lib/site";

type FormStep = 1 | 2 | 3;

interface FormData {
  position: string;
  name: string;
  nameKana: string;
  birthDate: string;
  email: string;
  phone: string;
  zipCode: string;
  address: string;
  motivation: string;
  questions: string;
}

export default function EntryPage() {
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<FormData>({
    position: "",
    name: "",
    nameKana: "",
    birthDate: "",
    email: "",
    phone: "",
    zipCode: "",
    address: "",
    motivation: "",
    questions: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const positions = recruit.positions;

  const validateStep1 = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.position) newErrors.position = "応募職種を選択してください";
    if (!formData.name) newErrors.name = "お名前を入力してください";
    if (!formData.nameKana) newErrors.nameKana = "ふりがなを入力してください";
    if (!formData.birthDate) newErrors.birthDate = "生年月日を入力してください";
    if (!formData.email) newErrors.email = "メールアドレスを入力してください";
    if (!formData.phone) newErrors.phone = "電話番号を入力してください";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // 実際の送信処理はここに実装
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStep(3);
    setIsSubmitting(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (fieldName: keyof FormData) =>
    `w-full px-4 py-3 border ${
      errors[fieldName] ? "border-red-500" : "border-[var(--color-border)]"
    } focus:border-[var(--color-primary)] focus:outline-none transition-colors`;

  return (
    <main className="pt-20 lg:pt-0">
      {/* Section 1: ページヒーロー */}
      <section className="py-[60px] lg:py-[80px] px-6 bg-[var(--color-primary)]">
        <div className="max-w-[600px] mx-auto text-center text-white">
          <FadeInUp>
            <span className="text-white/60 text-sm tracking-widest uppercase">Entry</span>
            <h1 className="mt-4 text-3xl lg:text-4xl font-bold">エントリー</h1>
            <p className="mt-4 text-white/80">
              所要時間: 約5分
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 進捗バー */}
      <div className="py-8 px-6 border-b border-[var(--color-border)]">
        <div className="max-w-[600px] mx-auto">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: "入力" },
              { num: 2, label: "確認" },
              { num: 3, label: "完了" },
            ].map((s, i) => (
              <div key={s.num} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= s.num
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s.num}
                </div>
                <span
                  className={`ml-2 text-sm ${
                    step >= s.num ? "text-[var(--color-text-primary)]" : "text-gray-400"
                  }`}
                >
                  {s.label}
                </span>
                {i < 2 && (
                  <div
                    className={`w-16 lg:w-24 h-0.5 mx-4 ${
                      step > s.num ? "bg-[var(--color-primary)]" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2: エントリーフォーム */}
      <section className="py-[60px] lg:py-[80px] px-6">
        <div className="max-w-[600px] mx-auto">
          {step === 1 && (
            <FadeInUp>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleNext();
                }}
              >
                <div className="space-y-8">
                  {/* 応募職種 */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      応募職種 <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className={inputClass("position")}
                    >
                      <option value="">選択してください</option>
                      {positions.map((pos) => (
                        <option key={pos.id} value={pos.jobTitle}>
                          {pos.jobTitle}
                        </option>
                      ))}
                    </select>
                    {errors.position && (
                      <p className="mt-1 text-sm text-red-500">{errors.position}</p>
                    )}
                  </div>

                  {/* お名前 */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="山田 太郎"
                      className={inputClass("name")}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* ふりがな */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      ふりがな <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nameKana"
                      value={formData.nameKana}
                      onChange={handleChange}
                      placeholder="やまだ たろう"
                      className={inputClass("nameKana")}
                    />
                    {errors.nameKana && (
                      <p className="mt-1 text-sm text-red-500">{errors.nameKana}</p>
                    )}
                  </div>

                  {/* 生年月日 */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      生年月日 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className={inputClass("birthDate")}
                    />
                    {errors.birthDate && (
                      <p className="mt-1 text-sm text-red-500">{errors.birthDate}</p>
                    )}
                  </div>

                  {/* メールアドレス */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      メールアドレス <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* 電話番号 */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      電話番号 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="090-1234-5678"
                      className={inputClass("phone")}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  {/* 郵便番号（任意） */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      郵便番号
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="000-0000"
                      className={inputClass("zipCode")}
                    />
                  </div>

                  {/* 住所（任意） */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      住所
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="〇〇県〇〇市..."
                      className={inputClass("address")}
                    />
                  </div>

                  {/* 志望動機（任意） */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      志望動機
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      rows={4}
                      className={inputClass("motivation")}
                    />
                  </div>

                  {/* 質問（任意） */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      ご質問・ご相談
                    </label>
                    <textarea
                      name="questions"
                      value={formData.questions}
                      onChange={handleChange}
                      rows={4}
                      className={inputClass("questions")}
                    />
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <button type="submit" className="btn-primary w-full sm:w-auto">
                    確認画面へ
                  </button>
                </div>
              </form>
            </FadeInUp>
          )}

          {/* Section 3: 確認画面 */}
          {step === 2 && (
            <FadeInUp>
              <h2 className="text-xl font-bold mb-8">入力内容のご確認</h2>

              <div className="space-y-6">
                {[
                  { label: "応募職種", value: formData.position },
                  { label: "お名前", value: formData.name },
                  { label: "ふりがな", value: formData.nameKana },
                  { label: "生年月日", value: formData.birthDate },
                  { label: "メールアドレス", value: formData.email },
                  { label: "電話番号", value: formData.phone },
                  { label: "郵便番号", value: formData.zipCode || "未入力" },
                  { label: "住所", value: formData.address || "未入力" },
                  { label: "志望動機", value: formData.motivation || "未入力" },
                  { label: "ご質問", value: formData.questions || "未入力" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col sm:flex-row border-b border-[var(--color-border)] pb-4"
                  >
                    <span className="text-sm text-[var(--color-text-muted)] sm:w-32 flex-shrink-0">
                      {item.label}
                    </span>
                    <span className="mt-1 sm:mt-0 whitespace-pre-wrap">{item.value}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="mt-12">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="btn-secondary"
                  >
                    戻って修正する
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary disabled:opacity-50"
                  >
                    {isSubmitting ? "送信中..." : "この内容で応募する"}
                  </button>
                </div>
              </form>
            </FadeInUp>
          )}

          {/* Section 4: 完了画面 */}
          {step === 3 && (
            <FadeInUp className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold mb-4">
                エントリーを受け付けました
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-loose mb-8">
                ご応募いただきありがとうございます。
                <br />
                入力いただいたメールアドレスに確認メールをお送りしました。
                <br />
                <br />
                担当者より{" "}
                <span className="font-bold">5営業日以内</span>{" "}
                にご連絡いたします。
                <br />
                しばらくお待ちください。
              </p>

              <div className="p-6 bg-[var(--color-bg-gray)] mb-8">
                <p className="text-sm text-[var(--color-text-muted)] mb-2">
                  ご不明な点がございましたら
                </p>
                <p className="font-medium">
                  {recruit.contact.department}: {recruit.contact.email}
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  TEL: {recruit.contact.phone}（{recruit.contact.hours}）
                </p>
              </div>

              <Link href="/" className="text-link">
                トップページに戻る
              </Link>
            </FadeInUp>
          )}
        </div>
      </section>
    </main>
  );
}
