import Link from "next/link";

type RelatedLink = { label: string; href: string };

export default function RelatedLinks({ items }: { items: RelatedLink[] }) {
  return (
    <section className="flex flex-col gap-2 px-4">
      <h2 className="text-sm font-bold text-black">관련 페이지</h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-black/10 px-3 py-1.5 text-sm text-zinc-700"
          >
            {item.label} →
          </Link>
        ))}
      </div>
    </section>
  );
}
