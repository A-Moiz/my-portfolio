import DefaultProject from "../assets/projects/other/project-image.svg";

interface Props {
  title: string;
  description: string;
  image?: string;
  href: string;
  tags?: string[];
}

function ProjectCard({ title, description, image, href, tags = [] }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col bg-white dark:bg-blue-900/40 border border-slate-200 dark:border-blue-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden bg-slate-100 dark:bg-blue-950">
        <img
          src={image || DefaultProject}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            {description}
          </p>

          {/* Tags Section */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-blue-800/50 text-slate-700 dark:text-blue-200 rounded-full border border-slate-200 dark:border-blue-700/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="pt-4 flex items-center text-blue-500 font-semibold text-xs uppercase tracking-wider">
          View Project
          <span className="ml-2 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;
