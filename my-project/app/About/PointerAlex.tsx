"use client";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export function PointerAlex({ children }: { children: React.ReactNode }) {
  return (
    <PointerHighlight
      rectangleClassName="border-blue-500 shadow-lg animate-pulse"
      pointerClassName="text-blue-500"
      containerClassName="inline-block"
    >
      <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
        {children}
      </span>
    </PointerHighlight>
  );
}
