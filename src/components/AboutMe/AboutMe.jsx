import myImage from "../../assets/eyad-cropped.png";
import Introduction from "./Introduction";

export default function AboutMe() {
  return (
    <section className="mt-10">
      {/* image */}
      <div className="relative">
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
