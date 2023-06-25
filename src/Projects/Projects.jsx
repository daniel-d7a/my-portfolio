import ProjectCard from "./ProjectCard";
import sevenP from "../assets/projects/7p.png";
import trioDesign from "../assets/projects/trio-design.png";
import marketing from "../assets/projects/marketing.png";

export default function Projects() {
  return (
    <section className="mx-4 mb-6">
      <div className="flex justify-between items-center">
        <span className="text-4xl font-bold">Projects</span>
        <span className="font-bold text-lg border-b-2 border-portfolio-neon-green pb-1 tracking-widest">
          CONTACT ME
        </span>
      </div>

      <div className="my-10 space-y-12 ">
        {[
          {
            image: sevenP,
            name: "7P main website",
            desc: "Resposive website for software and marketing company 7P",
            technologies: ["html", "css", "react", "tailwind", "i18next"],
            codeLink: "",
            projectLink: "https://aisevenp.com/home",
          },
          {
            image: trioDesign,
            name: "Trio Design Main website",
            desc: "Resposive website for a furniture comany Trio Design",
            technologies: ["html", "css", "react", "tailwind"],
            codeLink: "https://github.com/daniel-d7a/trio-design",
            projectLink: "https://radiant-jelly-fef12a.netlify.app/",
          },
          {
            image: marketing,
            name: "Responsive Marketing Company landing page",
            desc: "Mockup resposive landing page for a marketing company",
            technologies: ["html", "css", "react", "tailwind"],
            codeLink: "https://github.com/daniel-d7a/marketing-landingpage",
            projectLink: "https://spiffy-quokka-3a3ff7.netlify.app/",
          },
        ].map(({ image, name, technologies, codeLink, projectLink, desc }) => (
          <ProjectCard
            key={Math.random()}
            image={image}
            name={name}
            desc={desc}
            technologies={technologies}
            projectLink={projectLink}
            codeLink={codeLink}
          />
        ))}
      </div>
    </section>
  );
}
