"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface NumberBlockProps {
  number: number | string;
  unit?: string;
  label: string;
  size?: "large" | "medium" | "small";
  animate?: boolean;
  delay?: number;
}

function CountUp({
  end,
  duration = 1.5,
  delay = 0,
}: {
  end: number;
  duration?: number;
  delay?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now() + delay * 1000;
    const endValue = end;

    const tick = () => {
      const now = Date.now();
      if (now < startTime) {
        requestAnimationFrame(tick);
        return;
      }

      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * endValue));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [isInView, end, duration, delay]);

  return <span ref={ref}>{count}</span>;
}

export default function NumberBlock({
  number,
  unit,
  label,
  size = "medium",
  animate = true,
  delay = 0,
}: NumberBlockProps) {
  const isNumeric = typeof number === "number";
  const hasDecimal = isNumeric && !Number.isInteger(number);

  const sizeClasses = {
    large: "number-display",
    medium: "number-display-md",
    small: "number-display-sm",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      className="text-left"
    >
      <div className="flex items-baseline gap-1">
        <span className={sizeClasses[size]}>
          {animate && isNumeric ? (
            <>
              <CountUp end={Math.floor(number)} duration={1.5} delay={delay * 0.1} />
              {hasDecimal && (
                <>
                  .
                  <CountUp
                    end={Math.round((number % 1) * 10)}
                    duration={1.5}
                    delay={delay * 0.1}
                  />
                </>
              )}
            </>
          ) : (
            number
          )}
        </span>
        {unit && (
          <span className="text-xl font-medium text-[var(--color-text-secondary)]">
            {unit}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-[var(--color-text-muted)]">{label}</p>
    </motion.div>
  );
}
