import { about } from "../data";

export default function About() {
  return (
    <section id="about" className="border-b border-line py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionLabel index="01" label="About" />
        <p className="mt-6 max-w-3xl text-balance text-lg leading-relaxed text-fg sm:text-xl">
          {about}
        </p>
      </div>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="font-display text-xl font-semibold tracking-tight text-fg sm:text-2xl">
        {label}
      </h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
