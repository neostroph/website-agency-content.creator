import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }) => {
  // Destructuring items from config object
  const { base_url, logo_width, logo_height, logo_text, title } = config.site;

  // Default logo path in /public/images folder
  const defaultLogoPath = "/images/logo.jpg";

  return (
    <Link
      href={base_url}
      className="navbar-brand block py-1"
      style={{
        height: logo_height.replace("px", "") + "px",
        width: logo_width.replace("px", "") + "px",
      }}
    >
        <Image
          width={logo_width.replace("px", "") * 2}
          height={logo_height.replace("px", "") * 2}
          src={defaultLogoPath}
          alt={title}
          priority
        />
    </Link>
  );
};

export default Logo;
