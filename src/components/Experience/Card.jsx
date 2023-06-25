export default function Card({ name, years }) {
  return (
    <div className="flex flex-col justify-center items-center md:items-start">
      <p className="font-bold text-4xl md:text-5xl text-white md:mb-3">{name}</p>
      <p className="font-medium text-base md:text-lg text-portfolio-off-white">
        {years} Years Experience
      </p>
    </div>
  );
}
