"use client";

import { useRef, useState, useEffect } from "react";
import { FadeInUp } from "@/components/animations";

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
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // IntersectionObserver を使用してビュー内に入ったことを検出
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-50px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

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
    <FadeInUp
      delay={delay * 100}
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
    </FadeInUp>
  );
}
