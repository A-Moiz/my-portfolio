import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faFileDownload,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const githubProfileLink = "https://github.com/A-Moiz";
  const linkedinProfileLink =
    "https://www.linkedin.com/in/abdul-moiz-135580307/";

  const navLinks = [
    { label: "About me", href: "#hero" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-blue-950/80 backdrop-blur-md border-b border-slate-200 dark:border-blue-900 transition-all duration-300">
      {/* Main Container */}
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Name */}
        <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white cursor-default">
          ABDUL{" "}
          <span className="text-orange-600 dark:text-orange-500">MOIZ</span>
        </h1>

        {/* Nav Links */}
        <ul className="hidden lg:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-200">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="hover:scale-110 transition-transform"
            >
              <a
                href={link.href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-6">
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
              icon={<FontAwesomeIcon icon={faFileDownload} />}
              variant="secondary"
              download="abdul-moiz-sd.pdf"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-slate-900 dark:text-white p-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${isOpen ? "flex" : "hidden"} lg:hidden flex-col bg-white dark:bg-blue-950 border-t border-slate-200 dark:border-blue-900 animate-in slide-in-from-top duration-300`}
      >
        <ul className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-lg font-bold text-slate-600 dark:text-slate-200 hover:text-blue-500"
              >
                {link.label}
              </a>
            </li>
          ))}
          <hr className="border-slate-200 dark:border-blue-900 my-2" />
          <div className="flex items-center justify-between pt-2">
            <div className="flex gap-6">
              <a href={githubProfileLink} className="text-2xl dark:text-white">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href={linkedinProfileLink} className="text-2xl text-[#0077b5]">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <Button
              href="/abdul-moiz-sd.pdf"
              label="CV"
              icon={<FontAwesomeIcon icon={faFileDownload} />}
              variant="secondary"
              download="abdul-moiz-sd.pdf"
            />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
