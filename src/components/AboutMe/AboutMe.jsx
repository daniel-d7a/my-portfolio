import myImage from "../../assets/eyad-cropped.png";
import Decoration from "../Decoration/Decoration";
import Introduction from "./Introduction";

export default function AboutMe() {
  return (
    <section className="mt-10 md:flex md:flex-row-reverse md:justify-between md:mx-24 md:pb-10 relative overflow-hidden md:overflow-visible">
      {/* image */}
        <Decoration position={"md:-left-1/4 md:-top-6 -left-1/2 top-10"} />
      <div className="relative">
        <div className="absolute w-36 h-36 border-2 rounded-full top-2/3 -right-20 md:-left-20 md:top-1/2"></div>

        <div className="bg-gradient-to-b blur-sm w-60 mx-auto from-transparent via-zinc-800 via-90% to-transparent  h-[450px]"></div>
        <img
          src={myImage}
          className="object-cover w-60 mx-auto grayscale absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* end of image */}

      <Introduction />
    </section>
  );
}
