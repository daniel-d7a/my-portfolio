import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="mx-4 mb-6">
      <div className="flex justify-between items-center">
        <span className="text-4xl font-bold">Projects</span>
        <span className="font-bold text-lg border-b-2 border-portfolio-neon-green pb-1 tracking-widest">
          CONTACT ME
        </span>
      </div>

      <div className="my-10">
        {[
          {
            image:
              "https://images04.nicepage.com/feature/511177/create-any-website-with-powerful-website-builder-website-builder.jpg",
            name: " fullstack website",
            technologies: ["html", "css"],
            codeLink: "",
            projectLink: "",
          },
        ].map(({ image, name, technologies, codeLink, projectLink }) => (
          <ProjectCard
            key={name}
            image={image}
            name={name}
            technologies={technologies}
            projectLink={projectLink}
            codeLink={codeLink}
          />
        ))}
      </div>
    </section>
  );
}
