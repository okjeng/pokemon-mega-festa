export default function Badge({ children }: { children: string }) {
  return (
    <span className="shrink-0 rounded-full bg-accent px-2 py-0.5 text-[11px] font-semibold text-black">
      {children}
    </span>
  );
}
