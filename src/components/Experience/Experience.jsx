import Card from "./Card";
import Decoration from "./../Decoration/Decoration";
export default function Experience() {
  return (
    <div className="relative border-portfolio-off-white border-y-2 py-10 mb-10 mx-4 grid grid-cols-1 gap-y-6 place-items-center">
      {[
        { name: "CSS", years: 2 },
        { name: "JavaScript", years: 2 },
        { name: "React", years: 1 },
        { name: "Tailwind", years: 1 },
        { name: "Git", years: 1 },
      ].map(({ name, years }) => (
        <Card key={name} name={name} years={years} />
      ))}
      <Decoration position={" bottom-10"} />
    </div>
  );
}
