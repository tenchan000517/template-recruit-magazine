"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Employee } from "@/lib/site";

interface EmployeeCardProps {
  employee: Employee;
  index: number;
}

export default function EmployeeCard({ employee, index }: EmployeeCardProps) {
  const currentYear = new Date().getFullYear();
  const yearsAtCompany = currentYear - employee.joinYear;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
      className="group relative"
    >
      {/* 番号表示 */}
      <span className="absolute -top-4 -left-2 text-[80px] font-bold leading-none text-[var(--color-primary)] opacity-10 z-0">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* 写真 */}
      <Link href={`/people#${employee.id}`} className="block relative z-10">
        <div className="relative aspect-[2/3] overflow-hidden bg-gray-100">
          <Image
            src={employee.photo.main}
            alt={employee.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-103"
          />
        </div>
      </Link>

      {/* テキスト */}
      <div className="mt-4 relative z-10">
        <p className="text-sm text-[var(--color-text-muted)]">
          入社{yearsAtCompany}年目 / {employee.position}
        </p>
        <p className="mt-1 text-lg font-medium">{employee.name.split(" ")[0]}さん</p>
        <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
          {employee.interview[0]?.answer.slice(0, 60)}...
        </p>
        <Link
          href={`/people#${employee.id}`}
          className="inline-block mt-3 text-sm text-[var(--color-primary)] font-medium hover:underline"
        >
          インタビューを読む →
        </Link>
      </div>
    </motion.div>
  );
}
