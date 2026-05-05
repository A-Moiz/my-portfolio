import ExperienceCard from "../components/ExperienceCard";

const experienceData = [
  {
    company: "Horizon Teachers",
    role: "Learning Support Assistant",
    duration: "Apr 2026 - Current",
    description:
      "Supported students and teachers in a classroom setting by breaking down complex tasks into manageable steps, providing one-to-one GCSE Maths assistance to help students build confidence and understanding, and contributing to smooth lesson delivery by managing classroom resources.",
    isCurrent: true,
    tags: [
      "Communication",
      "Patience",
      "Adaptability",
      "Problem Solving",
      "Teamwork",
      "Organisation",
    ],
    url: "https://www.horizonteachers.com",
  },
  {
    company: "RevuLink",
    role: "iOS Developer",
    duration: "May 2025",
    description:
      "Delivered a production ready iOS application for a client by integrating their existing website into a native WebView, then identified and resolved App Store review blockers to ensure a successful public release.",
    isCurrent: false,
    tags: [
      "Swift",
      "SwiftUI",
      "Client communication",
      "Attention to detail",
      "Problem solving",
    ],
    url: "https://revulink.net/?srsltid=AfmBOoqlGSHj1Gbm5I_JoHHA09IO2wegCZj1PNPxWDgIPfLD2AFgniwD&_su_rec=IL7bU3kShGspsWfTRsa17xRod9G26wxG2AmZ8Uh7vE8LwljV8OSQA-Ql8dhLmsB-_ezkyLqB0GwANLYv__nyQH9UKezjYFMYXWLKy0AueyEUeZCCrnvUy-2DRPjSllTNQHJ4mymOJdk_uZtGY5vrFX1HLyJD_fqtTI7zCF9O0qRljLpKFxai8RLa9wEWyBJg48OO5zQvo3KspQCZ7RCKhvayQKR-OLiHrJCtuqdViE3iF9gHD5Gwtd0o0FeGGZHDdxxiwn9CpFjawQ&_su_rec_id=4d545d37-02f3-4051-af72-31c7becbc541-1778011249",
  },
  {
    company: "JD Sports",
    role: "Seasonal Staff",
    duration: "Dec 2024 - Jan 2025",
    description:
      "Managed end-to-end inventory operations including scanning, dispatching, pricing, and restocking footwear to ensure timely product availability. Improved stockroom organisation and accuracy while consistently contributing to a high-quality customer experience through effective teamwork.",
    isCurrent: false,
    tags: [
      "Inventory Management",
      "Teamwork",
      "Attention to Detail",
      "Time Management",
      "Communication",
      "Organisation",
    ],
    url: "https://www.jdsports.co.uk",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-8 md:px-16 bg-white dark:bg-blue-950 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Professional{" "}
            <span className="text-blue-700 dark:text-blue-400">Journey</span>
          </h2>
          <p className="text-slate-700 dark:text-slate-200 mt-4 max-w-xl text-lg">
            A look at the roles and projects that have shaped my skills as a
            developer.
          </p>
        </div>

        {/* Grid of Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experienceData.map((ex, index) => (
            <ExperienceCard key={index} {...ex} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
