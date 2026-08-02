"use client";

import { useState } from "react";

type AccordionItem = {
  question: string;
  answer: string;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-2 px-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-semibold text-black"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-2">
                <span className="text-zinc-400">Q.</span>
                {item.question}
              </span>
              <span className="shrink-0 text-zinc-400">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <p className="border-t border-black/5 px-4 py-3 text-sm leading-relaxed text-zinc-600">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
