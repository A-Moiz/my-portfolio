interface Props {
  school: string;
  degree: string;
  duration: string;
  description: string;
  isCurrent?: boolean;
  tags?: string[];
}

function EducationCard({
  school,
  degree,
  duration,
  description,
  isCurrent,
  tags = [],
}: Props) {
  return (
    <div className="flex flex-col p-8 bg-slate-50 dark:bg-blue-900/20 border border-slate-200 dark:border-blue-800 rounded-3xl transition-all hover:shadow-md">
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-2 mb-4 md:mb-0">
        <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
          {school}
        </h3>

        {isCurrent && (
          <span className="w-fit bg-blue-700 dark:bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
            Currently Enrolled
          </span>
        )}
      </div>

      <p className="text-blue-700 dark:text-blue-300 font-bold mb-2">
        {degree}
      </p>

      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 italic">
        {duration}
      </p>

      <p className="text-slate-700 dark:text-slate-100 leading-relaxed">
        {description}
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-bold px-3 py-1 rounded-lg bg-slate-200/50 dark:bg-blue-800/40 text-slate-700 dark:text-blue-200 border border-slate-300/50 dark:border-blue-700/50 uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default EducationCard;
