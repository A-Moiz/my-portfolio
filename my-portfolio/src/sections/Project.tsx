import Button from "../components/Button";
import ProjectCard from "../components/ProjectCard";
import ListIt from "../assets/projects/ios/list-it-2.png";
import ListItWeb from "../assets/projects/other/list-it-web.png";
import OpbrCompanion from "../assets/projects/ios/opbr-companion-2.png";
import OpbrCompanionWeb from "../assets/projects/other/opbr-companion-web.png";
import BmiBuddy from "../assets/projects/ios/bmi-buddy-2.png";
import Vocabio from "../assets/projects/ios/vocabio-2.png";
import WheelSpin from "../assets/projects/other/wheel-spin.png";
import AnimeQuote from "../assets/projects/other/anime-quote.jpg";
import StudentResults from "../assets/projects/other/student-results.jpeg";
import SkinConsultation from "../assets/projects/other/skin-consultation.jpeg";
import TVShow from "../assets/projects/other/tv-show.png";

function Project() {
  const gitHubLink = "https://github.com/A-Moiz";
  const projectsData = [
    {
      title: "CodeYourFuture coursework - TV Show & Episode guide",
      description:
        "A dynamic, responsive web application built to take structured data from an external API and display it to users in a clear, interactive format.",
      image: TVShow,
      href: "https://cyf-a-moiz-tv.netlify.app",
      tags: ["HTML/CSS", "JavaScript", "TVMaze API"],
    },
    {
      title: "List It (iOS)",
      description:
        "A minimalist To-Do list and Note-taking app designed for speed and simplicity.",
      image: ListIt,
      href: "https://apps.apple.com/gb/app/list-it-simple-to-do-list/id6746731233",
      tags: ["iOS", "Swift", "SwiftUI", "Supabase", "Productivity"],
    },

    {
      title: "List It (Web)",
      description:
        "A minimalist To-Do list and Note-taking app designed for speed and simplicity.",
      image: ListItWeb,
      href: "https://list-it-dom.netlify.app/landingpage",
      tags: ["Web", "React", "Tailwind css", "Productivity"],
    },

    {
      title: "OPBR Companion (iOS)",
      description:
        "A comprehensive guide and companion utility for One Piece Bounty Rush players to optimise their gameplay.",
      image: OpbrCompanion,
      href: "https://apps.apple.com/gb/app/opbr-companion/id6737994116",
      tags: ["iOS", "Swift", "SwiftUI", "Game guide"],
    },

    {
      title: "OPBR Companion (Web)",
      description:
        "A comprehensive guide and companion utility for One Piece Bounty Rush players to optimise their gameplay.",
      image: OpbrCompanionWeb,
      href: "https://opbr-companion.netlify.app",
      tags: ["Web", "TypeScript", "Game guide"],
    },

    {
      title: "BMI Buddy",
      description:
        "A streamlined health utility providing a quick and easy way for users to calculate and track their BMI.",
      image: BmiBuddy,
      href: "https://apps.apple.com/gb/app/bmi-buddy/id6683310423",
      tags: ["iOS", "Swift", "SwiftUI", "Health & Fitness", "Firebase"],
    },

    {
      title: "Vocabio",
      description:
        "A community driven slang dictionary where users contribute definitions and vote on the best entries in a live feed.",
      image: Vocabio,
      href: "https://apps.apple.com/gb/app/vocabio/id6757109154",
      tags: ["iOS", "Swift", "SwiftUI", "Firebase", "Social"],
    },

    {
      title: "Random Generator",
      description:
        "A simple web application that allows users to add items, display them in a sidebar, and generate a random item from the list.",
      image: WheelSpin,
      href: "https://github.com/A-Moiz/spin-d-wheel",
      tags: ["Web", "JavaScript", "HTML/CSS", "DOM Manipulation"],
    },

    {
      title: "Anime Quote Generator",
      description:
        "A simple and interactive web application that displays random anime quotes and allows users to browse and search through all available quotes.",
      image: AnimeQuote,
      href: "https://github.com/A-Moiz/anime-quote-generator",
      tags: ["Web", "HTML/CSS", "JavaScript", "Firebase"],
    },

    {
      title: "University coursework - Student Progression Outcome System",
      description:
        "Python program designed to determine student progression outcomes based on the number of credits achieved in Pass, Defer, and Fail categories.",
      image: StudentResults,
      href: "https://github.com/A-Moiz/student-results",
      tags: ["Python", "File I/O", "Data Visualization", "Exception Handling"],
    },

    {
      title: "University coursework - Skin Consultation Manager",
      description:
        "Java desktop application designed to manage doctors and patient consultations for a skin consultation clinic.",
      image: SkinConsultation,
      href: "https://github.com/A-Moiz/Skin-Consultation-Manager",
      tags: ["Java", "OOP", "Swing GUI", "University"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-8 md:px-16 bg-white dark:bg-blue-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
              Selected <span className="text-blue-500">Projects</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-lg text-lg">
              A curated selection of work ranging from mobile applications to
              websites.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              href={gitHubLink}
              label="More on GitHub"
              variant="secondary"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
