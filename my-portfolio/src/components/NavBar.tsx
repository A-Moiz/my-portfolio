import GitHub from "../assets/github.png";
import Linkedin from "../assets/linkedin.png";
import Download from "../assets/download.png";
import Button from "./Button";

function NavBar() {
  const githubProfileLink = "https://github.com/A-Moiz";
  const linkedinProfileLink =
    "https://www.linkedin.com/in/abdul-moiz-135580307/";

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-12 py-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      {/* Name */}
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white cursor-default">
          ABDUL <span className="text-orange-500">MOIZ</span>
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex gap-10 text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
        <li className="hover:scale-120">
          <a
            href="#projects"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Projects
          </a>
        </li>
        <li className="hover:scale-120">
          <a
            href="#skills"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Skills
          </a>
        </li>
        <li className="hover:scale-120">
          <a
            href="#contact"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Actions & Socials */}
      <div className="flex items-center gap-6">
        <div className="flex gap-4 border-r border-slate-200 dark:border-slate-800 pr-6">
          <a
            href={githubProfileLink}
            target="_blank"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <img className="w-6 h-6 dark:invert" src={GitHub} alt="GitHub" />
          </a>
          <a
            href={linkedinProfileLink}
            target="_blank"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <img className="w-6 h-6" src={Linkedin} alt="LinkedIn" />
          </a>
        </div>

        <Button href="" label="CV" icon={Download} variant="secondary" />
      </div>
    </nav>
  );
}

export default NavBar;
