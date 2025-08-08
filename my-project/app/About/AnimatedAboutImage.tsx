"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface AnimatedAboutImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function AnimatedAboutImage({ src, alt, className }: AnimatedAboutImageProps) {
  return (
    <div className={`relative group w-64 h-80 md:w-80 md:h-[26rem] ${className || ""} shadow-[6px_6px_0_0_rgba(0,0,0,0.18)] rounded-2xl bg-white border`}>
      <motion.div
        className="w-full h-full rounded-3xl overflow-hidden"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.06 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-3xl"
          sizes="(max-width: 768px) 16rem, 20rem"
          priority
        />
      </motion.div>
      {/* Floating, Gradient Arrow Overlay */}
<motion.div
  className="absolute bottom-4 right-4 z-10 bg-white/80 rounded-full p-2 shadow-lg flex items-center justify-center"
  animate={{
    y: [0, -15, 0],
    boxShadow: [
      '0 4px 24px 0 rgba(139,92,246,0.25)',
      '0 8px 32px 0 rgba(59,130,246,0.35)',
      '0 4px 24px 0 rgba(139,92,246,0.25)'
    ]
  }}
  transition={{
    repeat: Infinity,
    duration: 2,
    ease: "easeInOut"
  }}
>
  <ArrowUpRight
    className="w-8 h-8 drop-shadow-xl"
    style={{
      background: 'linear-gradient(135deg, #3b82f6 0%, #a21caf 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      filter: 'drop-shadow(0 2px 8px #a21caf66)'
    }}
  />
</motion.div>
    </div>
  );
}
