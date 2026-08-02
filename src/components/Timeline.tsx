type TimelineItem = {
  label: string;
  time?: string;
  description?: string;
};

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="flex flex-col px-4">
      {items.map((item, idx) => (
        <li key={idx} className="relative flex gap-3 pb-6 last:pb-0">
          {idx !== items.length - 1 && (
            <span className="absolute top-3 left-[5px] h-full w-px bg-black/10" aria-hidden />
          )}
          <span className="relative mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" aria-hidden />
          <div className="flex flex-col gap-0.5">
            {item.time && <span className="text-xs font-semibold text-zinc-500">{item.time}</span>}
            <span className="text-sm font-bold text-black">{item.label}</span>
            {item.description && <span className="text-sm text-zinc-600">{item.description}</span>}
          </div>
        </li>
      ))}
    </ol>
  );
}
