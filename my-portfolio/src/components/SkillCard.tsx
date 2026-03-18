interface Props {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleColor?: string;
}

function SkillCard({
  title,
  children,
  className = "",
  titleColor = "text-slate-900 dark:text-white",
}: Props) {
  return (
    <div
      className={`p-8 rounded-3xl shadow-sm border transition-all duration-300 ${className}`}
    >
      <h3 className={`text-2xl font-bold mb-6 ${titleColor}`}>{title}</h3>
      {children}
    </div>
  );
}

export default SkillCard;
