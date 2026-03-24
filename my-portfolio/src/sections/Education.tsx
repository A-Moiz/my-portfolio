import EducationCard from "../components/EducationCard";

const educationData = [
  {
    school: "CodeYourFuture (CYF)",
    degree: "Web Development Bootcamp",
    duration: "Jan 2026 - Present",
    description:
      "Web development bootcamp where I am developing practical skills in modern web technologies, collaborating with other developers, and building real-world projects using HTML, CSS and JavaScript",
    isCurrent: true,
  },
  {
    school: "University of Westminster",
    degree:
      "Bachelor of Science with Computer Science with First Class Honours",
    duration: "Sep 2021 - Jun 2024",
    description:
      "Studied various aspects of modern computer science and specialised computer science topics, laying the foundation for my success in a rapidly changing environment",
    isCurrent: false,
  },
];

function Education() {
  return (
    <section
      id="education"
      className="py-20 px-8 md:px-16 bg-white dark:bg-blue-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Academic{" "}
            <span className="text-blue-700 dark:text-blue-400">Journey</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-200 mt-4 max-w-xl text-lg">
            My educational background and current academic pursuits in the field
            of technology.
          </p>
        </div>

        {/* Grid of Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
