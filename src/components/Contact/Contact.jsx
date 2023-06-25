import Decoration from "../Decoration/Decoration";

export default function Contact() {
  return (
    <div className="py-16 border-b-2 border-portfolio-off-white mb-10 mx-4 relative">
      <div className="mb-16 px-1">
        <h3 className="text-center text-4xl text-white mb-5">Contact</h3>
        <p className="text-base text-portfolio-off-white text-center">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>

      <form className="flex flex-col items-end justify-center">
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
      <Decoration position={"bottom-48 -left-1/2"} />
    </div>
  );
}
