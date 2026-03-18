interface Props {
  name: string;
  icon: string;
}

function SkillEntry({ name, icon }: Props) {
  return (
    <div className="flex items-center gap-3">
      <img src={icon} alt="check" className="w-5 h-5 dark:invert" />
      <span className="font-semibold text-slate-700 dark:text-slate-200">
        {name}
      </span>
    </div>
  );
}

export default SkillEntry;
