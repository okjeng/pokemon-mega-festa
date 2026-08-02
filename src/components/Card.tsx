import Link from "next/link";
import type { ReactNode } from "react";
import Badge from "./Badge";

type CardProps = {
  icon?: string;
  title: string;
  description?: string;
  tag?: string;
  href?: string;
  children?: ReactNode;
};

export default function Card({ icon, title, description, tag, href, children }: CardProps) {
  const content = (
    <div className="flex h-full flex-col gap-2 rounded-2xl border border-black/10 bg-white p-4">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {icon && (
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-lg">
              {icon}
            </span>
          )}
          <h3 className="text-sm font-bold text-black">{title}</h3>
        </div>
        {tag && <Badge>{tag}</Badge>}
      </div>
      {description && <p className="text-sm leading-relaxed text-zinc-600">{description}</p>}
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
