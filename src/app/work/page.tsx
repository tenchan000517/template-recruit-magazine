"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp, FadeInImage, HeroBackground } from "@/components/animations";
import { recruit, company } from "@/lib/site";

export default function WorkPage() {
  const jobs = recruit.jobs;
  const daySchedule = recruit.daySchedule;
  const careerPath = recruit.careerPath;

  return (
    <main>
      {/* Section 1: ページヒーロー */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <HeroBackground className="absolute inset-0">
          <Image
            src="/images/work-hero.jpg"
            alt="仕事の様子"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--color-primary)]/70" />
        </HeroBackground>
        <div className="relative z-10 text-center text-white px-6">
          <FadeInUp>
            <span className="text-sm tracking-[0.3em] opacity-80">
              WORK
            </span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h1 className="mt-4 text-3xl lg:text-5xl font-bold">
              仕事を知る
            </h1>
          </FadeInUp>
        </div>
      </section>

      {/* Section 2: 事業概要 */}
      <section className="py-[100px] lg:py-[120px] px-6">
        <FadeInUp className="max-w-[800px] mx-auto text-center">
          <p className="text-lg lg:text-xl leading-loose text-[var(--color-text-secondary)]">
            私たちは、精密機器の製造を通じて
            <br className="hidden lg:block" />
            日本のものづくりを支えています。
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {["高い技術力", "チームワーク", "品質へのこだわり"].map((item, i) => (
              <FadeInUp
                key={item}
                delay={i * 100}
                className="py-4 border-t-2 border-[var(--color-primary)]"
              >
                <span className="text-lg font-medium">{item}</span>
              </FadeInUp>
            ))}
          </div>
        </FadeInUp>
      </section>

      {/* Section 3: 職種紹介（繰り返し） */}
      <section className="py-[80px] lg:py-[100px] bg-[var(--color-bg-gray)]">
        <div className="max-w-container mx-auto px-6">
          <FadeInUp className="mb-16">
            <span className="section-label">JOB TYPES</span>
            <h2 className="text-2xl lg:text-3xl font-bold">職種紹介</h2>
          </FadeInUp>

          <div className="space-y-20 lg:space-y-32">
            {jobs.map((job, index) => (
              <FadeInUp
                key={job.id}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* 写真 */}
                <div className="relative aspect-[4/3] overflow-hidden lg:[direction:ltr]">
                  <div className="absolute top-4 left-4 z-10 text-6xl lg:text-8xl font-bold text-[var(--color-primary)]/20">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <FadeInImage
                    src={job.photo || `/images/work/${job.id}.jpg`}
                    alt={job.title}
                    fill
                    className="object-cover"
                    containerClassName="relative w-full h-full"
                  />
                </div>

                {/* テキスト */}
                <div className="lg:[direction:ltr]">
                  <h3 className="text-xl lg:text-2xl font-bold">{job.title}</h3>
                  <p className="mt-2 text-[var(--color-primary)] font-medium">
                    {job.catchcopy}
                  </p>
                  <p className="mt-6 text-[var(--color-text-secondary)] leading-loose">
                    {job.description}
                  </p>

                  <div className="mt-8">
                    <h4 className="text-sm font-bold text-[var(--color-text-tertiary)] mb-3">
                      主な業務内容
                    </h4>
                    <ul className="space-y-2">
                      {job.duties.map((duty) => (
                        <li key={duty} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[var(--color-primary)]" />
                          <span className="text-[var(--color-text-secondary)]">{duty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-8 p-4 bg-white border-l-4 border-[var(--color-primary)] text-sm leading-relaxed">
                    {job.appeal}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: 1日の流れ */}
      {daySchedule && (
        <section className="py-[100px] lg:py-[120px] px-6">
          <div className="max-w-container mx-auto">
            <FadeInUp className="mb-12 text-center">
              <span className="section-label">ONE DAY</span>
              <h2 className="text-2xl lg:text-3xl font-bold">{daySchedule.title}</h2>
            </FadeInUp>

            {/* タイムライン（PC: 横向き、SP: 縦向き） */}
            <div className="relative">
              {/* PC用 横向きタイムライン */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* 接続線 */}
                  <div className="absolute top-6 left-0 right-0 h-0.5 bg-[var(--color-primary)]/20" />

                  <div className="flex justify-between">
                    {daySchedule.items.map((item, index) => (
                      <FadeInUp
                        key={index}
                        delay={index * 50}
                        className="relative flex flex-col items-center text-center"
                        style={{ width: `${100 / daySchedule.items.length}%` }}
                      >
                        {/* ドット */}
                        <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] relative z-10" />

                        {/* 時間 */}
                        <span className="mt-4 text-lg font-bold text-[var(--color-primary)]">
                          {item.time}
                        </span>

                        {/* ラベル */}
                        <span className="mt-2 font-medium text-sm">{item.label}</span>

                        {/* 説明 */}
                        {item.description && (
                          <span className="mt-1 text-xs text-[var(--color-text-tertiary)] px-2 line-clamp-2">
                            {item.description}
                          </span>
                        )}
                      </FadeInUp>
                    ))}
                  </div>
                </div>
              </div>

              {/* SP用 縦向きタイムライン */}
              <div className="lg:hidden space-y-0">
                {daySchedule.items.map((item, index) => (
                  <FadeInUp
                    key={index}
                    delay={index * 50}
                    className="relative flex gap-4 pb-8 last:pb-0"
                  >
                    {/* 縦線とドット */}
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                      {index !== daySchedule.items.length - 1 && (
                        <div className="w-0.5 flex-1 bg-[var(--color-primary)]/20 mt-1" />
                      )}
                    </div>

                    {/* コンテンツ */}
                    <div className="flex-1 -mt-1">
                      <div className="flex items-baseline gap-3">
                        <span className="text-lg font-bold text-[var(--color-primary)]">
                          {item.time}
                        </span>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {item.description && (
                        <p className="mt-1 text-sm text-[var(--color-text-tertiary)]">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 5: キャリアパス */}
      {careerPath && careerPath.length > 0 && (
        <section className="py-[100px] lg:py-[120px] px-6 bg-[var(--color-bg-primary-light)]">
          <div className="max-w-container mx-auto">
            <FadeInUp className="mb-12 text-center">
              <span className="section-label">CAREER PATH</span>
              <h2 className="text-2xl lg:text-3xl font-bold">キャリアパス</h2>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                あなたの成長を、会社全体でサポートします。
              </p>
            </FadeInUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
              {careerPath.map((path, index) => (
                <FadeInUp
                  key={index}
                  delay={index * 100}
                  className="relative"
                >
                  {/* 矢印（PC時のみ、最後以外） */}
                  {index < careerPath.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 transform translate-x-full -translate-y-1/2 text-[var(--color-primary)]/30 text-2xl">
                      →
                    </div>
                  )}

                  <div className="bg-white p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl font-bold text-[var(--color-primary)]/30">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-[var(--color-primary)]">
                        {path.stage}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{path.title}</h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {path.description}
                    </p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 6: CTA */}
      <section className="py-[120px] lg:py-[160px] px-6">
        <FadeInUp className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">
            私たちと一緒に働く仲間を<br />ご紹介します
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            実際に働いている社員の声を聞いてみてください。
          </p>

          <div className="mt-10">
            <Link href="/people" className="btn-primary">
              社員インタビューを見る
            </Link>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}
