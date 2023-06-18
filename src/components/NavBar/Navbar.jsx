import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="mt-5 mx-24">
      {/* name */}
      <div className="mb-5 text-2xl font-bold capitalize flex flex-col justify-center items-center">
        <span>Eyad Alsherif</span>
      </div>
      {/* end of name */}

      {/* links */}
      <div className="flex gap-6 justify-center">
        <a
          href="https://github.com/daniel-d7a"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="text-white text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/eyad-alsherif-741177216/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="text-white text-3xl" />
        </a>
        <a
          href="https://www.instagram.com/eyadooo_76/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className="text-white text-3xl" />
        </a>
        <a
          href="https://www.facebook.com/Eyad1Alsherif"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF className="text-white text-3xl" />
        </a>
      </div>
      {/* end of links */}
    </nav>
  );
}
