interface Props {
  school: string;
  degree: string;
  duration: string;
  description: string;
  isCurrent?: boolean;
}

function EducationCard({
  school,
  degree,
  duration,
  description,
  isCurrent,
}: Props) {
  return (
    <div className="flex flex-col p-8 bg-slate-50 dark:bg-blue-900/20 border border-slate-200 dark:border-blue-800 rounded-3xl transition-all hover:shadow-md">
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-2 mb-4 md:mb-0">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {school}
        </h3>

        {isCurrent && (
          <span className="w-fit bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
            Currently Enrolled
          </span>
        )}
      </div>

      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
        {degree}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 italic">
        {duration}
      </p>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default EducationCard;
