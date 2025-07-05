"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedOnScroll({
  children,
  className,
  delay = 0,
}: Props) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}
