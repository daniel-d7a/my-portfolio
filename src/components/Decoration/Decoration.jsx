export default function Decoration({ position }) {
  const classes = "w-96 h-16 border-4 absolute opacity-10";

  return (
    <div className={`absolute ${position}`}>
      <div style={{ borderRadius: "50%" }} className={`${classes}`}></div>
      <div style={{ borderRadius: "50%" }} className={`${classes} top-3`}></div>
      <div style={{ borderRadius: "50%" }} className={`${classes} top-6`}></div>
      <div style={{ borderRadius: "50%" }} className={`${classes} top-9`}></div>
    </div>
  );
}
