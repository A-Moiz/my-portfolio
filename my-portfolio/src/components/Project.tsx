import Button from "./Button";
import ProjectCard from "./ProjectCard";
import ListIt from "../assets/list-it.jpeg";
import OpbrCompanion from "../assets/opbr-companion.png";
import BmiBuddy from "../assets/bmi-buddy.png";
import Vocabio from "../assets/vocabio.png";

function Project() {
  const gitHubLink = "https://github.com/A-Moiz";
  const projectsData = [
    {
      title: "List It",
      description:
        "A minimalist To-Do list and Note-taking app designed for speed and simplicity on iOS.",
      image: ListIt,
      href: "https://apps.apple.com/gb/app/list-it-simple-to-do-list/id6746731233",
    },

    {
      title: "OPBR Companion",
      description:
        "A comprehensive guide and companion utility for One Piece Bounty Rush players to optimise their gameplay.",
      image: OpbrCompanion,
      href: "https://apps.apple.com/gb/app/opbr-companion/id6737994116",
    },

    {
      title: "BMI Buddy",
      description:
        "A streamlined health utility providing a quick and easy way for users to calculate and track their BMI.",
      image: BmiBuddy,
      href: "https://apps.apple.com/gb/app/bmi-buddy/id6683310423",
    },

    {
      title: "Vocabio",
      description:
        "A community driven slang dictionary where users contribute definitions and vote on the best entries in a live feed.",
      image: Vocabio,
      href: "https://apps.apple.com/gb/app/vocabio/id6757109154",
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
