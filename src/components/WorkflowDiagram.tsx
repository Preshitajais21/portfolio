import type { DiagramStage } from "../data";

export default function WorkflowDiagram({ stages }: { stages: DiagramStage[] }) {
  return (
    <div className="rounded-lg border border-line bg-surface p-5 sm:p-6">
      <p className="font-mono text-xs tracking-widest text-accent">PIPELINE</p>
      <ol className="mt-5 flex flex-col">
        {stages.map((stage, i) => (
          <li key={stage.label} className="relative flex gap-4 pb-7 last:pb-0">
            {i < stages.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[15px] top-8 h-[calc(100%-1.25rem)] w-px bg-line"
              />
            )}
            <span className="font-mono relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/60 bg-surface-2 text-xs text-accent">
              {i + 1}
            </span>
            <div className="min-w-0 pt-0.5">
              <p className="font-display text-[15px] font-semibold text-fg">{stage.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{stage.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
