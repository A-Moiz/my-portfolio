import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faFolderOpen,
  faBars,
  faXmark,
  faVolumeHigh,
  faVolumeMute,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import audio from "../assets/overtaken.mp3";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-blue-950/90 backdrop-blur-md border-b border-slate-200 dark:border-blue-900 transition-all duration-300">
      <audio ref={audioRef} src={audio} loop />
      <div className="flex items-center justify-between px-6 md:px-12 py-4">
        {/* Name */}
        <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white cursor-default">
          ABDUL{" "}
          <span className="text-orange-700 dark:text-orange-400">MOIZ</span>
        </h1>

        {/* Nav Links */}
        <ul className="hidden lg:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="hover:scale-110 transition-transform"
            >
              <a
                href={link.href}
                className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-6">
            <div className="flex gap-6 border-r border-slate-200 dark:border-blue-800 pr-6">
              <button
                onClick={toggleMusic}
                className="text-slate-900 dark:text-white hover:scale-110 transition-transform"
                aria-label={isPlaying ? "Pause music" : "Play music"}
              >
                <FontAwesomeIcon
                  icon={isPlaying ? faVolumeHigh : faVolumeMute}
                  className="text-xl w-6"
                />
              </button>

              <a
                href={githubProfileLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my GitHub profile"
                className="text-slate-900 dark:text-white opacity-90 hover:opacity-100 transition-opacity"
              >
                <FontAwesomeIcon icon={faGithub} className="text-2xl" />
              </a>
              <a
                href={linkedinProfileLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit my LinkedIn profile"
                className="text-[#005582] dark:text-[#70b5f9] opacity-90 hover:opacity-100 transition-opacity"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
              </a>
            </div>
            <Button
              href="https://drive.google.com/drive/folders/13lQdURn4Z63anjTBkN1ts2Ii-Wr2ikPm?usp=share_link"
              label="Documents"
              icon={<FontAwesomeIcon icon={faFolderOpen} />}
              variant="secondary"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
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
                className="block py-2 text-lg font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600"
              >
                {link.label}
              </a>
            </li>
          ))}
          <hr className="border-slate-200 dark:border-blue-900 my-2" />
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={toggleMusic}
              className="text-2xl text-slate-900 dark:text-white"
            >
              <FontAwesomeIcon icon={isPlaying ? faVolumeHigh : faVolumeMute} />
            </button>
            <div className="flex gap-6">
              <a
                href={githubProfileLink}
                aria-label="GitHub"
                className="text-2xl text-slate-900 dark:text-white"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={linkedinProfileLink}
                aria-label="LinkedIn"
                className="text-2xl text-[#005582] dark:text-[#70b5f9]"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <Button
              href="https://drive.google.com/drive/folders/13lQdURn4Z63anjTBkN1ts2Ii-Wr2ikPm?usp=share_link"
              label="Documents"
              icon={<FontAwesomeIcon icon={faFolderOpen} />}
              variant="secondary"
            />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
