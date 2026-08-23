export default function SectionHeading({ index, title }) {
  return (
    <div className="flex items-center gap-4 mb-10 sm:mb-12">
      <span className="font-mono text-sm text-accent-700 dark:text-accent-400 flex-shrink-0">
        {index}
      </span>
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white whitespace-nowrap">
        {title}
      </h2>
      <span className="h-px flex-1 bg-slate-200 dark:bg-ink-700" aria-hidden="true" />
    </div>
  );
}
