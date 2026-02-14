"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeInUp } from "@/components/animations";
import { recruit } from "@/lib/site";

export default function CulturePage() {
  const benefits = recruit.benefits;
  const training = recruit.training;
  const gallery = recruit.gallery;
  const employees = recruit.employees;
  const cta = recruit.cta;

  return (
    <main>
      {/* Section 1: ページヒーロー */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/culture-hero.jpg"
            alt="働く環境"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--color-primary)]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <FadeInUp>
            <span className="text-sm tracking-[0.3em] opacity-80">
              CULTURE
            </span>
          </FadeInUp>
          <FadeInUp delay={100}>
            <h1 className="mt-4 text-3xl lg:text-5xl font-bold">
              働く環境
            </h1>
          </FadeInUp>
        </div>
      </section>

      {/* Section 2: 福利厚生ハイライト（3つ） */}
      {benefits?.highlights && benefits.highlights.length > 0 && (
        <section className="py-[100px] lg:py-[140px] px-6">
          <div className="max-w-container mx-auto">
            <FadeInUp className="mb-16 text-center">
              <span className="section-label">BENEFITS</span>
              <h2 className="text-2xl lg:text-3xl font-bold">福利厚生</h2>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                社員一人ひとりが安心して働ける環境を整えています。
              </p>
            </FadeInUp>

            <div className="space-y-16 lg:space-y-24">
              {benefits.highlights.map((benefit, index) => (
                <FadeInUp
                  key={index}
                  delay={index * 100}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  {/* 制度説明 */}
                  <div className="lg:[direction:ltr]">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl lg:text-5xl font-bold text-[var(--color-primary)]/20">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-[var(--color-text-secondary)] leading-loose">
                      {benefit.description}
                    </p>
                  </div>

                  {/* 社員コメント */}
                  <div className="lg:[direction:ltr] bg-[var(--color-bg-gray)] p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      {/* 顔写真 */}
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={
                            benefit.testimonial.photo ||
                            "/images/placeholder-person.jpg"
                          }
                          alt={benefit.testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* 引用 */}
                      <div className="flex-1">
                        <p className="relative text-[var(--color-text-secondary)] leading-relaxed pl-4 border-l-2 border-[var(--color-primary)]">
                          {benefit.testimonial.quote}
                        </p>
                        <div className="mt-4">
                          <p className="font-medium text-sm">
                            {benefit.testimonial.author}
                          </p>
                          <p className="text-xs text-[var(--color-text-tertiary)]">
                            {benefit.testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 3: 全福利厚生一覧 */}
      {benefits?.categories && benefits.categories.length > 0 && (
        <section className="py-[80px] lg:py-[100px] px-6 bg-[var(--color-bg-gray)]">
          <div className="max-w-container mx-auto">
            <FadeInUp className="mb-12 text-center">
              <h3 className="text-xl lg:text-2xl font-bold">福利厚生一覧</h3>
            </FadeInUp>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {benefits.categories.map((category, categoryIndex) => (
                <FadeInUp
                  key={category.name}
                  delay={categoryIndex * 100}
                  className="bg-white p-6 lg:p-8"
                >
                  <h4 className="text-lg font-bold mb-4 pb-3 border-b-2 border-[var(--color-primary)]">
                    {category.name}
                  </h4>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                      >
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 4: 研修・教育制度 */}
      {training && training.length > 0 && (
        <section className="py-[100px] lg:py-[120px] px-6">
          <div className="max-w-container mx-auto">
            <FadeInUp className="mb-12 text-center">
              <span className="section-label">TRAINING</span>
              <h2 className="text-2xl lg:text-3xl font-bold">研修・教育制度</h2>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                入社後の成長を、しっかりサポートします。
              </p>
            </FadeInUp>

            {/* タイムライン（PC: 横向き、SP: 縦向き） */}
            <div className="relative">
              {/* PC用 横向きタイムライン */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* 接続線 */}
                  <div className="absolute top-6 left-0 right-0 h-0.5 bg-[var(--color-primary)]/20" />

                  <div className="flex justify-between">
                    {training.map((item, index) => (
                      <FadeInUp
                        key={index}
                        delay={index * 50}
                        className="relative flex flex-col items-center text-center px-2"
                        style={{ width: `${100 / training.length}%` }}
                      >
                        {/* ドット */}
                        <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] relative z-10" />

                        {/* 時期 */}
                        <span className="mt-4 text-sm font-bold text-[var(--color-primary)]">
                          {item.period}
                        </span>

                        {/* タイトル */}
                        <span className="mt-2 font-medium text-sm">
                          {item.title}
                        </span>

                        {/* 期間 */}
                        {item.duration && (
                          <span className="mt-1 text-xs text-[var(--color-text-tertiary)] bg-[var(--color-bg-gray)] px-2 py-0.5 rounded">
                            {item.duration}
                          </span>
                        )}

                        {/* 説明 */}
                        <span className="mt-2 text-xs text-[var(--color-text-tertiary)] px-1 line-clamp-3">
                          {item.description}
                        </span>
                      </FadeInUp>
                    ))}
                  </div>
                </div>
              </div>

              {/* SP用 縦向きタイムライン */}
              <div className="lg:hidden space-y-0">
                {training.map((item, index) => (
                  <FadeInUp
                    key={index}
                    delay={index * 50}
                    className="relative flex gap-4 pb-8 last:pb-0"
                  >
                    {/* 縦線とドット */}
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] flex-shrink-0" />
                      {index !== training.length - 1 && (
                        <div className="w-0.5 flex-1 bg-[var(--color-primary)]/20 mt-1" />
                      )}
                    </div>

                    {/* コンテンツ */}
                    <div className="flex-1 -mt-1">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <span className="text-sm font-bold text-[var(--color-primary)]">
                          {item.period}
                        </span>
                        <span className="font-medium">{item.title}</span>
                        {item.duration && (
                          <span className="text-xs text-[var(--color-text-tertiary)] bg-[var(--color-bg-gray)] px-2 py-0.5 rounded">
                            {item.duration}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-[var(--color-text-tertiary)]">
                        {item.description}
                      </p>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 5: オフィスギャラリー */}
      {gallery && gallery.length > 0 && (
        <section className="py-[80px] lg:py-[100px] px-6 bg-[var(--color-bg-primary-light)]">
          <div className="max-w-container mx-auto">
            <FadeInUp className="mb-12 text-center">
              <span className="section-label">GALLERY</span>
              <h2 className="text-2xl lg:text-3xl font-bold">オフィス紹介</h2>
            </FadeInUp>

            {/* 不規則グリッド */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
              {gallery.map((photo, index) => {
                // サイズに応じてグリッドスパンを決定
                const sizeClasses = {
                  large: "col-span-2 row-span-2",
                  medium: "col-span-1 row-span-2 lg:col-span-1 lg:row-span-2",
                  small: "col-span-1 row-span-1",
                };
                const aspectClasses = {
                  large: "aspect-square",
                  medium: "aspect-[1/2]",
                  small: "aspect-square",
                };

                return (
                  <FadeInUp
                    key={index}
                    delay={index * 50}
                    className={`relative overflow-hidden group ${
                      sizeClasses[photo.size as keyof typeof sizeClasses] ||
                      sizeClasses.small
                    }`}
                  >
                    <div
                      className={`relative w-full h-full ${
                        aspectClasses[
                          photo.size as keyof typeof aspectClasses
                        ] || aspectClasses.small
                      }`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* ホバー時にキャプション表示 */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white text-sm p-3">{photo.alt}</p>
                      </div>
                    </div>
                  </FadeInUp>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Section 6: 社員の声（3つ） */}
      {employees && employees.length > 0 && (
        <section className="py-[100px] lg:py-[120px] px-6">
          <div className="max-w-container mx-auto">
            <FadeInUp className="mb-12 text-center">
              <span className="section-label">VOICE</span>
              <h2 className="text-2xl lg:text-3xl font-bold">社員の声</h2>
            </FadeInUp>

            <div className="grid md:grid-cols-3 gap-8">
              {employees.slice(0, 3).map((employee, index) => (
                <FadeInUp
                  key={employee.id}
                  delay={index * 100}
                  className="text-center"
                >
                  {/* 顔写真 */}
                  <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src={employee.photo.main}
                      alt={employee.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* 引用 */}
                  <blockquote className="relative">
                    <span className="absolute -top-2 left-0 text-4xl text-[var(--color-primary)]/20 font-serif">
                      "
                    </span>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed px-4">
                      {employee.quote}
                    </p>
                  </blockquote>

                  {/* 名前・役職 */}
                  <div className="mt-4">
                    <p className="font-medium">{employee.name}</p>
                    <p className="text-sm text-[var(--color-text-tertiary)]">
                      入社{new Date().getFullYear() - employee.joinYear}年目 /{" "}
                      {employee.position}
                    </p>
                  </div>

                  {/* 詳細リンク */}
                  <Link
                    href={`/people#${employee.id}`}
                    className="inline-block mt-4 text-sm text-[var(--color-primary)] hover:underline"
                  >
                    インタビューを読む →
                  </Link>
                </FadeInUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 7: CTA */}
      <section className="py-[120px] lg:py-[160px] px-6 bg-[var(--color-bg-gray)]">
        <FadeInUp className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">
            {cta?.messages?.culture || "一緒に働きませんか？"}
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            {cta?.messages?.default || "まずは話を聞くだけでも歓迎です。"}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={cta?.primary?.href || "/entry"}
              className="btn-primary"
            >
              {cta?.primary?.text || "エントリーする"}
            </Link>
            <Link
              href={cta?.secondary?.href || "/recruit"}
              className="btn-secondary"
            >
              {cta?.secondary?.text || "募集要項を見る"}
            </Link>
          </div>
        </FadeInUp>
      </section>
    </main>
  );
}
