import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faXmark,
  faVolumeHigh,
  faVolumeMute,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import audio from "../assets/overtaken.mp3";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
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

  const smoothScrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800;
    let startTime: number | null = null;

    const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startPosition + distance * ease(progress));
      if (elapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  const githubProfileLink = "https://github.com/A-Moiz";
  const linkedinProfileLink =
    "https://www.linkedin.com/in/abdul-moiz-135580307/";

  const navLinks = [
    { label: "About me", href: "#hero" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  // Highlight the nav link for the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  });

  return (
    <>
      <audio ref={audioRef} src={audio} loop />

      {/* Desktop Vertical Sidebar */}
      <nav className="hidden lg:flex flex-col justify-between fixed top-0 left-0 h-screen w-64 px-8 py-12 bg-white/90 dark:bg-blue-950/90 backdrop-blur-md border-r border-slate-200 dark:border-blue-900 z-50 overflow-y-auto transition-colors duration-300">
        <div>
          {/* Name */}
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white cursor-default mb-16 leading-tight">
            ABDUL
            <br />
            <span className="text-orange-700 dark:text-orange-400">MOIZ</span>
          </h1>

          {/* Nav Links */}
          <ul className="flex flex-col gap-5 text-sm font-bold uppercase tracking-widest">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo(link.href);
                    }}
                    className={`flex items-center gap-3 transition-colors duration-200 ${
                      isActive
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400"
                    }`}
                  >
                    <span
                      className={`h-px transition-all duration-200 ${
                        isActive
                          ? "w-8 bg-blue-700 dark:bg-blue-400"
                          : "w-4 bg-slate-400 dark:bg-slate-500"
                      }`}
                    />
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Bottom: Documents button + socials */}
        <div className="flex flex-col gap-6">
          <Button
            href="https://drive.google.com/drive/folders/13lQdURn4Z63anjTBkN1ts2Ii-Wr2ikPm?usp=share_link"
            label="Documents"
            icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
            variant="secondary"
          />

          <div className="flex items-center gap-6 border-t border-slate-200 dark:border-blue-800 pt-6">
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
        </div>
      </nav>

      {/* Mobile / Tablet Top Bar */}
      <nav className="lg:hidden sticky top-0 z-50 bg-white/90 dark:bg-blue-950/90 backdrop-blur-md border-b border-slate-200 dark:border-blue-900 transition-all duration-300">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white cursor-default">
            ABDUL{" "}
            <span className="text-orange-700 dark:text-orange-400">MOIZ</span>
          </h1>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="text-2xl text-slate-900 dark:text-white p-2 cursor-pointer"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`${isOpen ? "flex" : "hidden"} flex-col bg-white dark:bg-blue-950 border-t border-slate-200 dark:border-blue-900 animate-in slide-in-from-top duration-300`}
        >
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(link.href);
                    setIsOpen(false);
                  }}
                  className="block py-2 text-lg font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <hr className="border-slate-200 dark:border-blue-900" />

          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={toggleMusic}
              className="text-2xl text-slate-900 dark:text-white"
              aria-label={isPlaying ? "Pause music" : "Play music"}
            >
              <FontAwesomeIcon icon={isPlaying ? faVolumeHigh : faVolumeMute} />
            </button>

            <div className="flex gap-6">
              <a
                href={githubProfileLink}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-2xl text-slate-900 dark:text-white"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={linkedinProfileLink}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-2xl text-[#005582] dark:text-[#70b5f9]"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>

            <Button
              href="https://drive.google.com/drive/folders/13lQdURn4Z63anjTBkN1ts2Ii-Wr2ikPm?usp=share_link"
              label="Documents"
              icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
              variant="secondary"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
