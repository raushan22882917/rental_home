"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  textClassName,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  textClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ?? 1,
        delay: stagger(0.12),
      }
    );
  }, [scope.current]);

  return (
    <div className={cn(className)}>
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={cn("opacity-0 inline-block mr-[0.25em]", textClassName)}
            style={{
              filter: filter ? "blur(8px)" : "none",
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
