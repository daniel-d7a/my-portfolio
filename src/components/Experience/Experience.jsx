import Card from "./Card";
import Decoration from "./../Decoration/Decoration";
export default function Experience() {
  return (
    <div className="relative border-portfolio-off-white border-t-2 border-b-2 md:border-b-0 py-10 mb-10 mx-4 md:mx-24 md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-y-20 md:gap-x-10 place-items-center md:place-items-start">
      {[
        { name: "CSS", years: 2 },
        { name: "JavaScript", years: 2 },
        { name: "React", years: 1 },
        { name: "Tailwind", years: 1 },
        { name: "Git", years: 1 },
      ].map(({ name, years }) => (
        <Card key={name} name={name} years={years} />
      ))}
      {/* <Decoration position={" bottom-10"} /> */}
    </div>
  );
}
