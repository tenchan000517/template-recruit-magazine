"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, HeroBackground } from "@/components/animations";
import { recruit } from "@/lib/site";

export default function RecruitPage() {
  const positions = recruit.positions;
  const selectionFlow = recruit.selectionFlow;

  return (
    <main>
      {/* Section 1: ページヒーロー */}
      <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden">
        <HeroBackground className="absolute inset-0">
          <Image
            src="/images/recruit-hero.jpg"
            alt="募集要項"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--color-primary)]/70" />
        </HeroBackground>
        <div className="relative z-10 text-center text-white px-6">
          <FadeInUp>
            <span className="text-sm tracking-[0.3em] opacity-80">
              RECRUIT
            </span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h1 className="mt-4 text-3xl lg:text-5xl font-bold">
              募集要項
            </h1>
          </FadeInUp>
        </div>
      </section>

      {/* Section 2: 職種サマリー（アンカーリンク） */}
      <section className="py-[60px] px-6 bg-[var(--color-bg-gray)] sticky top-0 z-30">
        <div className="max-w-container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {positions.map((position) => (
              <a
                key={position.id}
                href={`#${position.id}`}
                className="px-6 py-3 bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors font-medium flex items-center gap-2"
              >
                {position.badge && (
                  <span className="px-2 py-0.5 bg-red-500 text-white text-xs">
                    {position.badge}
                  </span>
                )}
                {position.jobTitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: 職種別募集要項 */}
      <section className="py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[900px] mx-auto space-y-20">
          {positions.map((position, index) => (
            <FadeInUp
              key={position.id}
              id={position.id}
              className="scroll-mt-[200px]"
            >
              {/* ヘッダー */}
              <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-[var(--color-primary)]">
                <span className="text-4xl font-bold text-[var(--color-primary)]/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-3">
                  <h2 className="text-xl lg:text-2xl font-bold">{position.jobTitle}</h2>
                  {position.badge && (
                    <span className="px-3 py-1 bg-red-500 text-white text-sm font-medium">
                      {position.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* 募集要項テーブル */}
              <dl className="divide-y divide-[var(--color-border)]">
                <div className="py-4 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <dt className="font-medium text-[var(--color-text-tertiary)]">雇用形態</dt>
                  <dd className="sm:col-span-3">{position.employmentType}</dd>
                </div>

                <div className="py-4 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <dt className="font-medium text-[var(--color-text-tertiary)]">仕事内容</dt>
                  <dd className="sm:col-span-3 leading-relaxed">{position.description}</dd>
                </div>

                <div className="py-4 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <dt className="font-medium text-[var(--color-text-tertiary)]">応募資格</dt>
                  <dd className="sm:col-span-3">{position.requirements}</dd>
                </div>

                {position.preferredQualifications && (
                  <div className="py-4 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                    <dt className="font-medium text-[var(--color-text-tertiary)]">歓迎条件</dt>
                    <dd className="sm:col-span-3">{position.preferredQualifications}</dd>
                  </div>
                )}

                <div className="py-4 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <dt className="font-medium text-[var(--color-text-tertiary)]">勤務地</dt>
                  <dd className="sm:col-span-3">{position.location}</dd>
                </div>

                <div className="py-4 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <dt className="font-medium text-[var(--color-text-tertiary)]">勤務時間</dt>
                  <dd className="sm:col-span-3">{position.workHours}</dd>
                </div>

                <div className="py-4 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <dt className="font-medium text-[var(--color-text-tertiary)]">給与</dt>
                  <dd className="sm:col-span-3 font-medium">{position.salary}</dd>
                </div>

                <div className="py-4 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <dt className="font-medium text-[var(--color-text-tertiary)]">賞与</dt>
                  <dd className="sm:col-span-3">{position.bonus}</dd>
                </div>

                {position.raise && (
                  <div className="py-4 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                    <dt className="font-medium text-[var(--color-text-tertiary)]">昇給</dt>
                    <dd className="sm:col-span-3">{position.raise}</dd>
                  </div>
                )}

                <div className="py-4 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <dt className="font-medium text-[var(--color-text-tertiary)]">休日・休暇</dt>
                  <dd className="sm:col-span-3">{position.holidays}</dd>
                </div>

                <div className="py-4 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <dt className="font-medium text-[var(--color-text-tertiary)]">福利厚生</dt>
                  <dd className="sm:col-span-3">{position.benefits}</dd>
                </div>

                <div className="py-4 grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4">
                  <dt className="font-medium text-[var(--color-text-tertiary)]">選考プロセス</dt>
                  <dd className="sm:col-span-3">{position.selectionProcess}</dd>
                </div>
              </dl>
            </FadeInUp>
          ))}
        </div>
      </section>

      {/* Section 4: 応募の流れ */}
      <section className="py-[100px] lg:py-[120px] px-6 bg-[var(--color-bg-gray)]">
        <div className="max-w-container mx-auto">
          <FadeInUp className="mb-12 text-center">
            <span className="section-label">SELECTION FLOW</span>
            <h2 className="text-2xl lg:text-3xl font-bold">選考の流れ</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-2">
            {selectionFlow.map((flow, index) => (
              <FadeInUp
                key={flow.step}
                delay={index * 100}
                className="relative"
              >
                {/* 矢印（PC時のみ、最後以外） */}
                {index < selectionFlow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-1 transform translate-x-full -translate-y-1/2 text-[var(--color-primary)]/30 text-xl">
                    →
                  </div>
                )}

                <div className="bg-white p-6 text-center h-full flex flex-col items-center">
                  <span className="w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold">
                    {flow.step}
                  </span>
                  <h3 className="mt-4 font-bold">{flow.title}</h3>
                  {flow.description && (
                    <p className="mt-2 text-sm text-[var(--color-text-tertiary)]">
                      {flow.description}
                    </p>
                  )}
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: FAQ誘導 */}
      <section className="py-[80px] lg:py-[100px] px-6">
        <FadeInUp className="max-w-[700px] mx-auto text-center">
          <h2 className="text-xl lg:text-2xl font-bold">
            ご不明な点はありませんか？
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            よくあるご質問をまとめました。<br />
            その他のご質問もお気軽にお問い合わせください。
          </p>
          <div className="mt-8">
            <Link href="/faq" className="btn-secondary">
              よくある質問を見る
            </Link>
          </div>
        </FadeInUp>
      </section>

      {/* Section 6: CTA */}
      <section className="py-[120px] lg:py-[160px] px-6 bg-[var(--color-bg-primary-light)]">
        <FadeInUp className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">
            {recruit.cta.messages.top}
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            {recruit.cta.messages.default}
          </p>

          <div className="mt-10">
            <Link href="/entry" className="btn-primary text-lg px-10 py-4">
              エントリーする
            </Link>
          </div>

          <p className="mt-6 text-sm text-[var(--color-text-tertiary)]">
            お問い合わせ: {recruit.contact.phone}（{recruit.contact.hours}）
          </p>
        </FadeInUp>
      </section>
    </main>
  );
}
