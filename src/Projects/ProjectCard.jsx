export default function ProjectCard({
  image,
  name,
  technologies,
  codeLink,
  projectLink,
}) {
  return (
    <>
      <img src={image} />
      <div className="mt-4">
        <p className="text-2xl font-bold capitalize mb-2">{name}</p>
        <div className="text-portfolio-off-white text-lg flex flex-wrap justify-start items-center gap-3 mb-3">
          {technologies.map((tech) => (
            <span className="text-lg font-medium uppercase" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-start items-center gap-6 text-base uppercase font-bold">
          <a
            className="border-b-2 border-portfolio-neon-green pb-1 tracking-widest"
            href={projectLink}
          >
            view project
          </a>
          <a
            className="border-b-2 border-portfolio-neon-green pb-1 tracking-widest"
            href={codeLink}
          >
            view code
          </a>
        </div>
      </div>
    </>
  );
}
