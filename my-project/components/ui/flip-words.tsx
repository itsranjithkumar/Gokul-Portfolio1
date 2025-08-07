"use client";
import React, { useEffect, useRef, useState } from "react";

type FlipWordsProps = {
  words: string[];
  className?: string;
  interval?: number;
};

export const FlipWords = ({ words, className = "", interval = 2000 }: FlipWordsProps) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, interval, words.length]);

  return (
    <span className={"inline-block transition-all duration-500 ease-in-out text-indigo-600 " + className}>
      {words[index]}
    </span>
  );
};
