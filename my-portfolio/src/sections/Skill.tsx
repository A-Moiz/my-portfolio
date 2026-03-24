import CheckMark from "../assets/checkmark.png";
import SkillCard from "../components/SkillCard";
import SkillEntry from "../components/SkillEntry";

const technicalSkills = [
  "Swift",
  "SwiftUI",
  "Swift Data",
  "HTML",
  "CSS",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
  "Java",
  "Python",
  "Jest Testing",
  "Firebase",
  "Supabase",
  "SQL",
];
const tools = [
  "Xcode",
  "VS Code",
  "WebStorm",
  "PyCharm",
  "IntelliJ",
  "Android Studio",
  "Git",
  "GitHub",
];
const softSkills = [
  "Problem Solving",
  "Teamwork",
  "Attention to detail",
  "Agile Methodology",
  "Waterfall Methodology",
  "Debugging",
];

function Skill() {
  return (
    <section
      id="skills"
      className="py-20 px-8 md:px-16 bg-white dark:bg-blue-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-xl">
            I build iOS and web applications using modern technologies, with a
            focus on clean architecture and user experience.
          </p>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Technical Skills */}
          <SkillCard
            title="Technical Expertise"
            titleColor="text-blue-500"
            className="md:col-span-2 bg-slate-50 dark:bg-blue-900/20 border-slate-200 dark:border-blue-800"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {technicalSkills.map((s) => (
                <SkillEntry key={s} name={s} icon={CheckMark} />
              ))}
            </div>
          </SkillCard>

          {/* Soft Skills */}
          <SkillCard
            title="Soft Skills"
            titleColor="text-blue-300"
            className="bg-slate-900 dark:bg-blue-800 text-white border-transparent"
          >
            <ul className="space-y-4">
              {softSkills.map((s) => (
                <li key={s} className="flex items-center gap-3 opacity-90">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span className="text-lg">{s}</span>
                </li>
              ))}
            </ul>
          </SkillCard>

          {/* Tools Section */}
          <SkillCard
            title="Tools & Workflow"
            className="md:col-span-3 bg-slate-50 dark:bg-blue-900/20 border-slate-200 dark:border-blue-800"
          >
            <div className="flex flex-wrap gap-4">
              {tools.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-white dark:bg-blue-950 border border-slate-200 dark:border-blue-700 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </SkillCard>
        </div>
      </div>
    </section>
  );
}

export default Skill;
