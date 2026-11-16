/** One-line direct answer under a page heading. Usable from both server and browser components. */
export function AnswerBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`${className} mx-auto mt-4 max-w-2xl rounded-xl border border-brand-400/25 border-s-4 border-s-brand-500 bg-white/70 px-4 py-3 text-start text-sm leading-relaxed font-medium text-ink shadow-sm backdrop-blur sm:text-base`}>
      {children}
    </p>
  );
}
