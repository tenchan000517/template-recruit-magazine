"use client";

import Image from "next/image";
import { FadeInUp } from "@/components/animations";
import type { Employee } from "@/lib/site";

interface InterviewCardProps {
  employee: Employee;
  index: number;
  layout?: "left" | "right" | "full";
}

export default function InterviewCard({
  employee,
  index,
  layout = "left",
}: InterviewCardProps) {
  const currentYear = new Date().getFullYear();
  const yearsAtCompany = currentYear - employee.joinYear;
  const isEven = index % 2 === 0;
  const bgClass = isEven ? "bg-white" : "bg-[var(--color-bg-gray)]";

  // レイアウトパターンを決定（設計仕様書: 人物ごとに変える）
  const layoutPattern = layout || (index % 3 === 0 ? "full" : index % 2 === 0 ? "left" : "right");

  if (layoutPattern === "full") {
    return (
      <section id={employee.id} className={`py-[100px] lg:py-[120px] ${bgClass}`}>
        <div className="max-w-container mx-auto px-6">
          {/* 番号とキャッチコピー */}
          <FadeInUp className="mb-8">
            <span className="text-[80px] lg:text-[120px] font-bold leading-none text-[var(--color-primary)] opacity-10">
              {String(index + 1).padStart(2, "0")}
            </span>
          </FadeInUp>

          {/* 全幅写真 */}
          <FadeInUp className="relative aspect-[21/9] mb-12 overflow-hidden">
            <Image
              src={employee.photo.main}
              alt={employee.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl lg:text-4xl font-bold">{employee.catchcopy}</h3>
            </div>
          </FadeInUp>

          {/* プロフィール */}
          <FadeInUp className="max-w-[800px] mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="text-sm text-[var(--color-text-muted)]">
                {employee.joinType === "new" ? "新卒入社" : "中途入社"}
              </span>
              <span className="text-sm text-[var(--color-text-muted)]">
                入社{yearsAtCompany}年目
              </span>
              <span className="text-sm text-[var(--color-text-muted)]">
                {employee.position}
              </span>
            </div>
            <h4 className="text-2xl font-bold mb-2">{employee.name}</h4>
            <p className="text-sm text-[var(--color-text-muted)] mb-8">
              {employee.nameKana}
            </p>

            {/* プロフィール項目 */}
            <div className="flex flex-wrap gap-6 mb-12 text-sm">
              {employee.profile.map((item) => (
                <div key={item.label}>
                  <span className="text-[var(--color-text-muted)]">{item.label}: </span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>

            {/* インタビュー */}
            <div className="space-y-10">
              {employee.interview.map((qa, i) => (
                <div key={i}>
                  <h5 className="text-lg font-bold text-[var(--color-primary)] mb-3">
                    Q. {qa.question}
                  </h5>
                  <p className="text-[var(--color-text-secondary)] leading-loose">
                    {qa.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* 引用 */}
            {employee.quote && (
              <div className="mt-12 quote-block">
                {employee.quote}
              </div>
            )}
          </FadeInUp>
        </div>
      </section>
    );
  }

  // left / right レイアウト
  const isLeft = layoutPattern === "left";

  return (
    <section id={employee.id} className={`py-[100px] lg:py-[120px] ${bgClass}`}>
      <div className="max-w-container mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${!isLeft ? "lg:[direction:rtl]" : ""}`}>
          {/* 写真側 */}
          <FadeInUp className="lg:[direction:ltr]">
            <div className="relative">
              <span className="absolute -top-8 -left-4 text-[80px] lg:text-[100px] font-bold leading-none text-[var(--color-primary)] opacity-10 z-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative aspect-[3/4] overflow-hidden z-10">
                <Image
                  src={employee.photo.main}
                  alt={employee.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* サブ写真 */}
            {employee.photo.sub && employee.photo.sub.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mt-4">
                {employee.photo.sub.slice(0, 2).map((src, i) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden">
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            )}
          </FadeInUp>

          {/* テキスト側 */}
          <FadeInUp delay={200} className="lg:[direction:ltr]">
            {/* キャッチコピー */}
            <h3 className="text-2xl lg:text-3xl font-bold leading-relaxed mb-6">
              {employee.catchcopy}
            </h3>

            {/* プロフィール */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="text-sm text-[var(--color-text-muted)]">
                {employee.joinType === "new" ? "新卒入社" : "中途入社"}
              </span>
              <span className="text-sm text-[var(--color-text-muted)]">
                入社{yearsAtCompany}年目
              </span>
              <span className="text-sm text-[var(--color-text-muted)]">
                {employee.position}
              </span>
            </div>
            <h4 className="text-xl font-bold mb-1">{employee.name}</h4>
            <p className="text-sm text-[var(--color-text-muted)] mb-6">
              {employee.nameKana}
            </p>

            {/* プロフィール項目 */}
            <div className="flex flex-wrap gap-4 mb-10 text-sm border-b border-[var(--color-border)] pb-6">
              {employee.profile.map((item) => (
                <div key={item.label}>
                  <span className="text-[var(--color-text-muted)]">{item.label}: </span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>

            {/* インタビュー */}
            <div className="space-y-8">
              {employee.interview.map((qa, i) => (
                <div key={i}>
                  <h5 className="text-base font-bold text-[var(--color-primary)] mb-2">
                    Q. {qa.question}
                  </h5>
                  <p className="text-[var(--color-text-secondary)] leading-loose text-sm lg:text-base">
                    {qa.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* 引用 */}
            {employee.quote && (
              <div className="mt-10 pl-4 border-l-4 border-[var(--color-primary)]">
                <p className="text-lg lg:text-xl font-medium leading-relaxed">
                  {employee.quote}
                </p>
              </div>
            )}
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
