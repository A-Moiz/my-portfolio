import HeroImg from "../assets/hero-img.png";
import Button from "./Button";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-8 gap-50 dark:bg-gray-800"
    >
      <img
        src={HeroImg}
        alt="Hero image"
        className="w-80 h-80 rounded-full border-3"
      />

      <div className="p-1 w-150 dark:text-white">
        <h1 className="text-[50px] font-bold text-center">
          Software Developer
        </h1>

        <p>
          iOS-focused software developer building scalable applications with
          Swift and SwiftUI, passionate about clean architecture and creating
          intuitive user experiences.
        </p>

        <div className="flex flex-wrap gap-5 pt-6">
          <Button href="" label="CV" variant="primary" />
          <Button
            href="/ref-letter.pdf"
            label="Reference Letter"
            variant="secondary"
          />
          <Button
            href="/award.pdf"
            label="Award Confirmation"
            variant="secondary"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
