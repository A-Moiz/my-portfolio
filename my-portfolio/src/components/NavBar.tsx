import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Download from "../assets/download.png";
import Button from "./Button";

function NavBar() {
  const githubProfileLink = "https://github.com/A-Moiz";
  const linkedinProfileLink =
    "https://www.linkedin.com/in/abdul-moiz-135580307/";

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-12 py-4 bg-white/80 dark:bg-blue-950/80 backdrop-blur-md border-b border-slate-200 dark:border-blue-900 transition-all duration-300">
      {/* Name */}
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white cursor-default">
          ABDUL{" "}
          <span className="text-orange-600 dark:text-orange-500">MOIZ</span>
        </h1>
      </div>

      {/* Nav Links */}
      <ul className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-200">
        <li className="hover:scale-110 transition-transform">
          <a
            href="#hero"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            About me
          </a>
        </li>
        <li className="hover:scale-110 transition-transform">
          <a
            href="#projects"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Projects
          </a>
        </li>
        <li className="hover:scale-110 transition-transform">
          <a
            href="#skills"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Skills
          </a>
        </li>
        <li className="hover:scale-110 transition-transform">
          <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Actions & Socials */}
      <div className="flex items-center gap-6">
        <div className="flex gap-6 border-r border-slate-200 dark:border-blue-800 pr-6">
          <a
            href={githubProfileLink}
            target="_blank"
            className="text-slate-900 dark:text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>
          <a
            href={linkedinProfileLink}
            target="_blank"
            className="text-[#0077b5] dark:text-[#0a66c2] opacity-80 hover:opacity-100 transition-opacity"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
        </div>

        <Button
          href="/abdul-moiz-sd.pdf"
          label="CV"
          icon={Download}
          variant="secondary"
          download="abdul-moiz-sd.pdf"
        />
      </div>
    </nav>
  );
}

export default NavBar;
