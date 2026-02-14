"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/animations";
import { recruit, company, getEmployeeById } from "@/lib/site";
import InterviewCard from "@/components/InterviewCard";

export default function PeoplePage() {
  const employees = recruit.employees;
  const crosstalk = recruit.crosstalk;

  // レイアウトパターン配列（設計仕様書: 構成を人物ごとに変える）
  const layouts: Array<"left" | "right" | "full"> = ["left", "full", "right", "left", "right"];

  return (
    <main>
      {/* Section 1: ページヒーロー */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[var(--color-primary)]/60 z-10" />
          {/* 複数の社員写真をコラージュ風に配置 */}
          <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-80">
            {employees.slice(0, 3).map((emp, i) => (
              <div key={emp.id} className="relative overflow-hidden">
                <Image
                  src={emp.photo.main}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 w-full px-6 lg:px-20">
          <FadeInUp>
            <span className="text-white/60 text-sm tracking-widest uppercase">People</span>
            <h1 className="mt-4 text-white text-4xl lg:text-5xl font-bold">
              社員を知る
            </h1>
            <p className="mt-4 text-white/80 text-lg max-w-[600px]">
              {company.nameShort || "当社"}で働く社員のリアルな声をお届けします。
              先輩たちの経験や想いを通じて、会社の雰囲気を感じてください。
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Section 2: インタビュー導入 */}
      <section className="py-[80px] lg:py-[100px] px-6">
        <FadeInUp className="max-w-[700px] mx-auto text-center">
          <span className="section-label">INTERVIEW</span>
          <div className="section-line mx-auto" />
          <p className="text-[var(--color-text-secondary)] leading-loose">
            新卒入社、中途入社、さまざまなバックグラウンドを持つ社員が
            {company.nameShort || "当社"}で働いています。
            一人ひとりのストーリーを通じて、私たちの会社を知ってください。
          </p>
        </FadeInUp>

        {/* 社員ナビゲーション */}
        <div className="mt-12 max-w-container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {employees.map((emp) => (
              <a
                key={emp.id}
                href={`#${emp.id}`}
                className="px-4 py-2 text-sm border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {emp.name.split(" ")[0]}さん（{emp.position}）
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: 社員インタビュー（繰り返し） */}
      {employees.map((employee, index) => (
        <InterviewCard
          key={employee.id}
          employee={employee}
          index={index}
          layout={layouts[index % layouts.length]}
        />
      ))}

      {/* Section 4: 対談・クロストーク（オプション） */}
      {crosstalk && (
        <section className="py-[100px] lg:py-[120px] px-6 bg-[var(--color-bg-primary-light)]">
          <div className="max-w-[800px] mx-auto">
            <FadeInUp className="text-center mb-12">
              <span className="section-label">CROSSTALK</span>
              <h2 className="text-2xl lg:text-3xl font-bold">
                {crosstalk.title}
              </h2>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                {crosstalk.description}
              </p>
            </FadeInUp>

            {/* 参加者 */}
            <div className="flex justify-center gap-6 mb-12">
              {crosstalk.participants.map((id) => {
                const emp = getEmployeeById(id);
                if (!emp) return null;
                return (
                  <div key={id} className="text-center">
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden mx-auto">
                      <Image
                        src={emp.photo.main}
                        alt={emp.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium">{emp.name.split(" ")[0]}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{emp.position}</p>
                  </div>
                );
              })}
            </div>

            {/* 会話 */}
            <FadeInUp className="space-y-6">
              {crosstalk.conversation.map((msg, i) => {
                const emp = getEmployeeById(msg.speaker);
                const isEven = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className={`flex gap-4 ${isEven ? "" : "flex-row-reverse"}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden">
                        {emp && (
                          <Image
                            src={emp.photo.main}
                            alt={emp.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                    </div>
                    <div
                      className={`flex-1 bg-white p-4 ${
                        isEven ? "rounded-tr-2xl rounded-br-2xl rounded-bl-2xl" : "rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
                      }`}
                    >
                      <p className="text-xs text-[var(--color-text-muted)] mb-1">
                        {emp?.name.split(" ")[0]}
                      </p>
                      <p className="text-[var(--color-text-primary)]">{msg.text}</p>
                    </div>
                  </div>
                );
              })}
            </FadeInUp>
          </div>
        </section>
      )}

      {/* Section 5: CTA */}
      <section className="py-[120px] lg:py-[140px] px-6 bg-[var(--color-bg-gray)]">
        <FadeInUp className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">
            {recruit.cta.messages.people}
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            {recruit.cta.messages.default}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/work" className="btn-secondary">
              仕事を知る
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
