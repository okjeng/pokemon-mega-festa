"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/data/nav";

export default function NavTabs() {
  const pathname = usePathname();

  return (
    <nav className="no-scrollbar flex w-full gap-1.5 overflow-x-auto border-b border-black/10 bg-white px-3 py-2">
      {NAV_ITEMS.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex shrink-0 items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-medium ${
              isActive
                ? "border-accent bg-accent text-black"
                : "border-black/10 bg-white text-zinc-700"
            }`}
          >
            <span aria-hidden>{item.icon}</span>
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
