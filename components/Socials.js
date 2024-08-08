import Link from "next/link";
import {
  RiYoutubeLine,
  RiDribbbleLine,
  RiInstagramLine,
  RiWhatsappLine,
  RiMapPinLine,
  RiMailSendLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg ">
      <Link
        href={"https://wa.me/+91 98103 68359/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
      <Link
        href={"https://instagram.com/imperfectors/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.youtube.com/@ImPerfectors-a"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={"https://maps.app.goo.gl/U4uJfG5xMuRBVT7J9"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiMapPinLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>
      <Link href={"mailto:imperfectors@gmail.com"} className="hover:text-accent transition-all duration-300">
        <RiMailSendLine />
      </Link>
    </div>
  );
};

export default Socials;
