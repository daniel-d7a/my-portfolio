export default function Introduction() {
  return (
    <div className="text-center mx-4 my-10 lg:w-2/3 md:flex md:flex-col md:items-start">
      <h2 className="font-bold text-4xl md:text-6xl lg:text-7xl md:text-start md:leading-[4rem]">
        Nice to meet you! I'm{" "}
        <span className="border-b-4  border-portfolio-neon-green md:leading-[4.5rem]">
          Eyad Alsherif.
        </span>
      </h2>

      <p className="text-base text-portfolio-off-white my-8 font-medium leading-7 md:my-11  lg:w-3/5 md:text-start">
        Based in the Egypt, I'm a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <span className="font-bold text-lg border-b-2 border-portfolio-neon-green pb-1 tracking-widest">
        CONTACT ME
      </span>
    </div>
  );
}
