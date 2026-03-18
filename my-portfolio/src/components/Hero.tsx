import HeroImg from "../assets/hero-img.png";
import Button from "./Button";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-8 gap-12 md:gap-32 bg-white dark:bg-blue-950 transition-colors duration-300"
    >
      <img
        src={HeroImg}
        alt="Hero image"
        className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-slate-200 dark:border-blue-800 shadow-xl shadow-blue-500/10"
      />

      <div className="max-w-2xl dark:text-slate-100">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Software <span className="text-blue-500">Developer</span>
        </h1>

        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Software developer building scalable applications across iOS and Web,
          with a focus on clean architecture and intuitive user experiences.
        </p>

        <div className="flex flex-wrap gap-5 pt-8">
          <Button
            href="/abdul-moiz-sd.pdf"
            label="CV"
            variant="primary"
            download="abdul-moiz-sd.pdf"
          />
          <Button
            href="/reference-letter.pdf"
            label="Reference Letter"
            variant="secondary"
            download="reference-letter.pdf"
          />
          <Button
            href="/award-confirmation"
            label="Award Confirmation"
            variant="secondary"
            download="award-confirmation"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
