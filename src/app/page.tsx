"use client";

import Image from "next/image";
import Link from "next/link";
import { recruit, company } from "@/lib/site";
import NumberBlock from "@/components/NumberBlock";
import EmployeeCard from "@/components/EmployeeCard";
import { FadeInUp, FadeInImage, HeroBackground, StaggerContainer } from "@/components/animations";

export default function Home() {
  const employees = recruit.employees.slice(0, 3);
  const jobs = recruit.jobs.slice(0, 3);

  return (
    <main>
      {/* Section 1: ヒーローエリア */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        {/* 背景 */}
        <HeroBackground className="absolute inset-0 bg-[var(--color-primary)]">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/80 to-transparent z-10" />
          <Image
            src="/images/hero-main.jpg"
            alt="社員の働く様子"
            fill
            className="object-cover opacity-40"
            priority
          />
        </HeroBackground>

        {/* コンテンツ */}
        <div className="relative z-20 w-full px-6 lg:px-20">
          <div className="max-w-[600px]">
            <FadeInUp delay={300}>
              <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
                {recruit.concept.mainCopy}
              </h1>
            </FadeInUp>
            <FadeInUp delay={500}>
              <p className="mt-6 text-white/80 text-lg lg:text-xl leading-relaxed">
                {recruit.concept.subCopy}
              </p>
            </FadeInUp>
            <FadeInUp delay={700}>
              <div className="mt-10">
                <Link href="/people" className="btn-outline-white">
                  社員を知る
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-8 bg-white/40 animate-bounce" />
        </div>
      </section>

      {/* Section 2: コンセプトメッセージ */}
      <section className="py-[120px] lg:py-[160px] px-6">
        <FadeInUp className="max-w-[700px] mx-auto text-center">
          <span className="section-label">CONCEPT</span>
          <div className="section-line mx-auto" />
          <h2 className="text-2xl lg:text-3xl font-bold leading-relaxed">
            {company.catchphrase || "技術と誠実で、社会に貢献する"}
          </h2>
          <div className="mt-8 text-[var(--color-text-secondary)] leading-loose whitespace-pre-line text-left lg:text-center">
            {recruit.concept.description}
          </div>
        </FadeInUp>
      </section>

      {/* Section 3: 社員ピックアップ（3名） */}
      <section className="py-[80px] lg:py-[100px] px-6 bg-[var(--color-bg-gray)]">
        <div className="max-w-container mx-auto">
          <FadeInUp className="mb-12">
            <span className="section-label">PEOPLE</span>
            <h2 className="text-2xl lg:text-3xl font-bold">私たちと一緒に働く仲間</h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {employees.map((employee, index) => (
              <EmployeeCard key={employee.id} employee={employee} index={index} />
            ))}
          </div>

          <FadeInUp delay={500} className="mt-12 text-center">
            <Link href="/people" className="text-link">
              社員インタビューをもっと見る
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* Section 4: 数字で見る（Company Facts） */}
      <section className="py-[120px] lg:py-[140px] px-6 bg-[var(--color-bg-primary-light)]">
        <div className="max-w-container mx-auto">
          <FadeInUp className="mb-12 text-center">
            <span className="section-label">COMPANY FACTS</span>
            <h2 className="text-2xl lg:text-3xl font-bold">数字で見る{company.nameShort || "当社"}</h2>
          </FadeInUp>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {recruit.companyFacts.map((fact, index) => (
              <NumberBlock
                key={fact.label}
                number={fact.number}
                unit={fact.unit}
                label={fact.label}
                size={fact.size}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: 仕事を知る（Work へのリード） */}
      <section className="py-[80px] lg:py-[100px] px-6">
        <div className="max-w-container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* 写真 */}
            <FadeInImage
              src="/images/work-main.jpg"
              alt="業務風景"
              fill
              className="object-cover"
              containerClassName="relative aspect-[4/3]"
            />

            {/* テキスト */}
            <FadeInUp delay={100}>
              <span className="section-label">WORK</span>
              <h2 className="text-2xl lg:text-3xl font-bold">
                私たちの仕事
              </h2>
              <p className="mt-6 text-[var(--color-text-secondary)] leading-loose">
                私たちは{jobs.length}つの職種が連携して、
                お客様に価値を届けています。
                未経験からでも成長できる環境で、
                あなたの可能性を広げてみませんか。
              </p>

              <div className="mt-8 space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center gap-4 pl-4 border-l-2 border-[var(--color-primary)]"
                  >
                    <span className="font-medium">{job.title}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/work" className="text-link">
                  仕事の詳細を見る
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Section 6: CTA（行動喚起） */}
      <section className="py-[160px] lg:py-[180px] px-6 bg-[var(--color-bg-gray)]">
        <FadeInUp className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">
            {recruit.cta.messages.top}
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            {recruit.cta.messages.default}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={recruit.cta.secondary.href} className="btn-secondary">
              {recruit.cta.secondary.text}
            </Link>
            <Link href={recruit.cta.primary.href} className="btn-primary">
              {recruit.cta.primary.text}
            </Link>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}
