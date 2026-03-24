import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();
  const githubProfileLink = "https://github.com/A-Moiz";
  const linkedinProfileLink =
    "https://www.linkedin.com/in/abdul-moiz-135580307/";

  return (
    <footer className="py-12 px-8 md:px-16 bg-white dark:bg-blue-950 border-t border-slate-200 dark:border-blue-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="text-slate-900 dark:text-white font-bold tracking-tight">
            ABDUL{" "}
            <span className="text-orange-600 dark:text-orange-500">MOIZ</span>
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            © {currentYear} - All rights reserved.
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-6 items-center">
          <a
            href={githubProfileLink}
            target="_blank"
            aria-label="Visit my GitHub profile"
            className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-xl"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href={linkedinProfileLink}
            target="_blank"
            aria-label="Visit my LinkedIn profile"
            className="text-[#0077b5] dark:text-[#0a66c2] hover:opacity-80 transition-opacity text-xl"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        {/* Built with */}
        <p className="text-xs font-medium uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Built with <span className="text-blue-500">React</span> &{" "}
          <span className="text-blue-500">Tailwind</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
