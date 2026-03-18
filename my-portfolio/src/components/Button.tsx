interface Props {
  href: string;
  label: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
  download?: string;
}

function Button({ href, label, icon, variant = "primary", download }: Props) {
  const baseStyles =
    "flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg";
  const variantStyles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20"
      : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-slate-500/10";

  return (
    <a
      href={href}
      target="_blank"
      className={`${baseStyles} ${variantStyles}`}
      download={download}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{label}</span>
    </a>
  );
}

export default Button;
