interface Props {
  href: string;
  label: string;
  icon?: string;
  variant?: "primary" | "secondary";
}

function Button({ href, label, icon, variant = "primary" }: Props) {
  const variantStyles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20"
      : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-slate-500/10";

  return (
    <a
      href={href}
      target="_blank"
      className={`flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg ${variantStyles}`}
    >
      {icon && (
        <img className="w-4 h-4 dark:invert-0 invert" src={icon} alt="" />
      )}
      <span>{label}</span>
    </a>
  );
}

export default Button;
