export default function SectionHeading({ title }) {
  return (
    <div className="flex items-center gap-4 mb-10 sm:mb-12">
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white whitespace-nowrap">
        {title}
      </h2>
      <span className="h-px flex-1 bg-slate-200 dark:bg-ink-700" aria-hidden="true" />
    </div>
  );
}
