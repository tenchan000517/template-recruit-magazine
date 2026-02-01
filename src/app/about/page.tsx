"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { recruit, company, locations, contact } from "@/lib/site";

export default function AboutPage() {
  const ceo = recruit.ceo;
  const philosophy = recruit.philosophy;
  const history = recruit.history;
  const companyFacts = recruit.companyFacts;

  return (
    <main>
      {/* Section 1: ページヒーロー */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="会社概要"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[var(--color-primary)]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm tracking-[0.3em] opacity-80"
          >
            ABOUT
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl lg:text-5xl font-bold"
          >
            会社を知る
          </motion.h1>
        </div>
      </section>

      {/* Section 2: 代表メッセージ */}
      <section className="py-[100px] lg:py-[140px] px-6">
        <div className="max-w-container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <span className="section-label">MESSAGE</span>
            <h2 className="text-2xl lg:text-3xl font-bold">代表メッセージ</h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* 写真 (40%) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={ceo?.photo || "/images/ceo.jpg"}
                  alt={ceo?.name || "代表"}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-[var(--color-text-tertiary)] text-center">
                {ceo?.name || "代表取締役"}
              </p>
            </motion.div>

            {/* テキスト (60%) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              {/* 引用符装飾 */}
              <div className="relative">
                <span className="absolute -top-6 -left-4 text-6xl lg:text-8xl text-[var(--color-primary)]/10 font-serif leading-none">
                  "
                </span>
                <div className="pl-6 border-l-4 border-[var(--color-primary)]">
                  {ceo?.message?.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-[var(--color-text-secondary)] leading-loose mb-6 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* 署名 */}
              {ceo?.signature && (
                <div className="mt-8 flex justify-end">
                  <Image
                    src={ceo.signature}
                    alt="署名"
                    width={150}
                    height={60}
                    className="opacity-80"
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: 経営理念・ビジョン */}
      <section className="py-[100px] lg:py-[120px] px-6 bg-[var(--color-bg-primary-light)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[800px] mx-auto text-center"
        >
          <span className="section-label">PHILOSOPHY</span>
          <h2 className="text-2xl lg:text-3xl font-bold mb-10">
            {philosophy?.title || "私たちの約束"}
          </h2>

          {/* 理念ステートメント */}
          <p className="text-2xl lg:text-[32px] font-bold text-[var(--color-primary)] leading-relaxed mb-8">
            {philosophy?.statement || company.catchphrase}
          </p>

          {/* 説明文 */}
          <p className="text-[var(--color-text-secondary)] leading-loose">
            {philosophy?.description}
          </p>
        </motion.div>
      </section>

      {/* Section 4: 沿革 */}
      {history && history.length > 0 && (
        <section className="py-[100px] lg:py-[140px] px-6">
          <div className="max-w-container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-16 text-center"
            >
              <span className="section-label">HISTORY</span>
              <h2 className="text-2xl lg:text-3xl font-bold">沿革</h2>
            </motion.div>

            {/* タイムライン */}
            <div className="relative max-w-[900px] mx-auto">
              {/* 中央縦線 */}
              <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--color-primary)]/20 lg:transform lg:-translate-x-1/2" />

              <div className="space-y-12 lg:space-y-16">
                {history.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`relative flex items-start gap-6 lg:gap-0 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* ドット */}
                    <div className="absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-[var(--color-primary)] transform -translate-x-1/2 z-10 flex-shrink-0" />

                    {/* コンテンツ (SP: 左側、PC: 左右交互) */}
                    <div className="lg:w-1/2 pl-10 lg:pl-0">
                      <div
                        className={`lg:px-8 ${
                          index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                        }`}
                      >
                        <span className="text-2xl lg:text-3xl font-bold text-[var(--color-primary)]">
                          {item.year}
                        </span>
                        <p className="mt-2 text-[var(--color-text-secondary)]">
                          {item.event}
                        </p>
                      </div>
                    </div>

                    {/* 空のスペース (PC時のみ) */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Section 5: 会社概要 */}
      <section className="py-[100px] lg:py-[120px] px-6 bg-[var(--color-bg-gray)]">
        <div className="max-w-container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-12 text-center"
          >
            <span className="section-label">COMPANY</span>
            <h2 className="text-2xl lg:text-3xl font-bold">会社概要</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[900px] mx-auto bg-white"
          >
            <dl className="divide-y divide-gray-100">
              {[
                { label: "会社名", value: company.name },
                { label: "代表者", value: company.ceo },
                { label: "設立", value: company.established },
                { label: "資本金", value: company.capital },
                { label: "売上高", value: company.revenue },
                { label: "従業員数", value: company.employees },
                { label: "事業内容", value: company.business },
                ...(company.license ? [{ label: "許認可", value: company.license }] : []),
                { label: "所在地", value: locations.headquarters.address },
                { label: "電話番号", value: contact.phone },
                { label: "メール", value: contact.email },
              ]
                .filter((item) => item.value)
                .map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 sm:grid-cols-3 py-4 px-6"
                  >
                    <dt className="font-medium text-[var(--color-text-tertiary)] mb-1 sm:mb-0">
                      {item.label}
                    </dt>
                    <dd className="sm:col-span-2 text-[var(--color-text-secondary)]">
                      {item.value}
                    </dd>
                  </div>
                ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Section 6: アクセス */}
      <section className="py-[100px] lg:py-[120px] px-6">
        <div className="max-w-container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <span className="section-label">ACCESS</span>
            <h2 className="text-2xl lg:text-3xl font-bold">アクセス</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* 左: テキスト情報 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4">
                {locations.headquarters.name}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-loose mb-6">
                〒{locations.headquarters.zipCode}
                <br />
                {locations.headquarters.address}
              </p>
              {locations.headquarters.access && (
                <p className="text-[var(--color-text-secondary)] mb-6">
                  <span className="font-medium">アクセス：</span>
                  {locations.headquarters.access}
                </p>
              )}
              <p className="text-[var(--color-text-secondary)] mb-2">
                <span className="font-medium">TEL：</span>
                {contact.phone}
              </p>
              {contact.fax && (
                <p className="text-[var(--color-text-secondary)]">
                  <span className="font-medium">FAX：</span>
                  {contact.fax}
                </p>
              )}

              {locations.headquarters.mapUrl && (
                <a
                  href={locations.headquarters.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-[var(--color-primary)] hover:underline"
                >
                  Google Mapで開く
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </motion.div>

            {/* 右: Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-[4/3] bg-gray-200"
            >
              {/* Google Map埋め込みのプレースホルダー */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center text-[var(--color-text-tertiary)]">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-sm">Google Map</p>
                  <p className="text-xs mt-1">（埋め込みコードを設置してください）</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[120px] lg:py-[160px] px-6 bg-[var(--color-bg-gray)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[600px] mx-auto text-center"
        >
          <h2 className="text-2xl lg:text-3xl font-bold">
            私たちと一緒に働く仲間を
            <br />
            ご紹介します
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            実際に働いている社員の声を聞いてみてください。
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/people" className="btn-primary">
              社員インタビューを見る
            </Link>
            <Link href="/work" className="btn-secondary">
              仕事を知る
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
