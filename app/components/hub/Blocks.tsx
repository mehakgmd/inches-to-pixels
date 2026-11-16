import type { ContentBlock } from "../../lib/hubs";
import { DataTable } from "./parts";

const textClass = "mt-2 text-sm leading-relaxed text-ink-soft sm:text-base";

/** Renders content blocks from the content documents with the site's existing card styles. */
export default function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className={textClass}>
                {block.text}
              </p>
            );
          case "steps":
            return (
              <ol key={i} className="mt-4 space-y-3">
                {block.items.map((item, n) => (
                  <li key={n} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 text-xs font-bold text-on-brand"
                    >
                      {n + 1}
                    </span>
                    <span className="pt-0.5 text-sm leading-relaxed text-ink-soft sm:text-base">{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "list":
            return (
              <ul key={i} className="mt-2 space-y-1.5">
                {block.items.map((item, n) => (
                  <li key={n} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft sm:text-base">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "math":
            return (
              <div key={i} className="mt-3 space-y-2">
                {block.lines.map((line) => (
                  <p
                    key={line}
                    className={`rounded-xl border border-brand-400/25 bg-brand-50/70 px-4 py-2.5 font-semibold text-brand-700 tabular-nums ${
                      block.large ? "text-base sm:text-lg" : "text-sm"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            );
          case "note":
            return (
              <p
                key={i}
                className="mt-4 rounded-xl border border-line bg-surface-muted px-4 py-3 text-sm leading-relaxed text-ink-soft"
              >
                {block.text}
              </p>
            );
          case "table":
            return <DataTable key={i} table={block.table} caption={block.caption} />;
          case "sub":
            return (
              <div key={i} className="mt-5 rounded-2xl border border-line bg-white/80 p-4 sm:p-5">
                <h3 className="text-base font-bold text-ink">{block.heading}</h3>
                <Blocks blocks={block.blocks} />
              </div>
            );
        }
      })}
    </>
  );
}
