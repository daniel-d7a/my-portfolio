import Decoration from "../Decoration/Decoration";

export default function Contact() {
  return (
    <div className="py-16 border-b-2 border-portfolio-off-white mb-10 mx-4 relative lg:flex  lg:justify-between lg:items-start md:mx-24">
      <div className="relative mb-16 px-1 lg:flex lg:flex-col lg:justify-start lg:items-start lg:w-1/3">
        <h3 className="text-center font-bold text-4xl md:text-7xl text-white mb-5">
          Contact
        </h3>
        <p className="text-base md:text-lg md:font-medium text-portfolio-off-white text-center lg:text-start">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
        {/* <Decoration position={"-bottom-10 -left-2/3 hidden md:block"} /> */}
      </div>

      <form className="flex flex-col items-end justify-center lg:w-1/2">
        <div className="space-y-4">
          <input
            className="focus:border-portfolio-neon-green outline-none border-b-2 border-portfolio-off-white py-4 pl-6 w-full bg-transparent"
            type="text"
            placeholder="NAME"
          />
          <input
            className="focus:border-portfolio-neon-green outline-none border-b-2 border-portfolio-off-white py-4 pl-6 w-full bg-transparent"
            type="email"
            placeholder="EMAIL"
          />
          <textarea
            className="focus:border-portfolio-neon-green outline-none resize-none border-b-2 border-portfolio-off-white py-4 pl-6 w-full bg-transparent"
            placeholder="MESSAGE"
            rows={4}
          />
        </div>

        <button className="mt-10  bg-transparent border-b-2 border-portfolio-neon-green py-2">
          SEND MESSAGE
        </button>
      </form>
      <Decoration position={"bottom-48 -left-1/2 md:bottom-40 md:-left-1/4"} />
    </div>
  );
}
