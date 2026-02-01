"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { recruit } from "@/lib/site";

export default function FAQPage() {
  const faqCategories = recruit.faq;

  return (
    <main>
      {/* Section 1: ページヒーロー */}
      <section className="relative h-[25vh] min-h-[200px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/faq-hero.jpg"
            alt="よくある質問"
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
            FAQ
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-3xl lg:text-5xl font-bold"
          >
            よくある質問
          </motion.h1>
        </div>
      </section>

      {/* Section 2: カテゴリナビ（スティッキー） */}
      <section className="py-4 px-6 bg-white border-b border-[var(--color-border)] sticky top-0 z-30">
        <div className="max-w-container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
            {faqCategories.map((category) => (
              <a
                key={category.category}
                href={`#${category.category.replace(/\s/g, "-")}`}
                className="px-4 py-2 text-sm lg:text-base border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {category.category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: FAQリスト（展開状態で表示） */}
      <section className="py-[80px] lg:py-[100px] px-6">
        <div className="max-w-[900px] mx-auto space-y-16 lg:space-y-20">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              id={category.category.replace(/\s/g, "-")}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-[100px]"
            >
              {/* カテゴリヘッダー */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-bold text-[var(--color-primary)]/20">
                  {String(categoryIndex + 1).padStart(2, "0")}
                </span>
                <h2 className="text-xl lg:text-2xl font-bold">{category.category}</h2>
              </div>

              {/* FAQ項目 */}
              <div className="space-y-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                    className="border-b border-[var(--color-border)] pb-8 last:border-b-0"
                  >
                    {/* 質問 */}
                    <div className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-sm">
                        Q
                      </span>
                      <h3 className="text-lg font-bold text-[var(--color-primary)] pt-0.5">
                        {item.question}
                      </h3>
                    </div>

                    {/* 回答 */}
                    <div className="flex gap-4 mt-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-bg-gray)] text-[var(--color-text-secondary)] flex items-center justify-center font-bold text-sm">
                        A
                      </span>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed pt-0.5">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: 問い合わせ誘導 */}
      <section className="py-[80px] lg:py-[100px] px-6 bg-[var(--color-bg-gray)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[700px] mx-auto text-center"
        >
          <h2 className="text-xl lg:text-2xl font-bold">
            お探しの質問は見つかりましたか？
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            その他のご質問やご不明点がございましたら、<br />
            お気軽にお問い合わせください。
          </p>

          <div className="mt-8 p-6 bg-white inline-block">
            <p className="text-sm text-[var(--color-text-tertiary)] mb-2">お問い合わせ先</p>
            <p className="font-bold">{recruit.contact.department}</p>
            <p className="text-xl font-bold text-[var(--color-primary)] mt-2">
              {recruit.contact.phone}
            </p>
            <p className="text-sm text-[var(--color-text-tertiary)] mt-1">
              {recruit.contact.hours}
            </p>
            <p className="mt-3">
              <a
                href={`mailto:${recruit.contact.email}`}
                className="text-[var(--color-primary)] hover:underline"
              >
                {recruit.contact.email}
              </a>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Section 5: CTA */}
      <section className="py-[120px] lg:py-[160px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-[600px] mx-auto text-center"
        >
          <h2 className="text-2xl lg:text-3xl font-bold">
            {recruit.cta.messages.top}
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)]">
            {recruit.cta.messages.default}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/recruit" className="btn-secondary">
              募集要項を見る
            </Link>
            <Link href="/entry" className="btn-primary">
              エントリーする
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
