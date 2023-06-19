export default function Card({ name, years }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-4xl text-white">{name}</p>
      <p className="font-medium text-base text-portfolio-off-white">
        {years} Years Experience
      </p>
    </div>
  );
}
