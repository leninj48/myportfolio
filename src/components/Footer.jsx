import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#008080] text-white py-6">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-2">
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} Lenin. All rights reserved.
        </p>
        <p className="text-sm md:text-base font-medium">
          Made with ❤️ by{" "}
          <a href="#" className="underline hover:text-[#ffffff]">
            Lenin_J
          </a>
        </p>
        <div className="flex justify-center gap-4 mt-2">
        <a
            href="https://github.com/leninj48/"
            className="hover:text-[#CCCCFF]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/lenin-j/"
            className="hover:text-[#CCCCFF]"
          >
            <FaLinkedin size={29} />
          </a>
          <a
            href="https://www.instagram.com/_lazy_lenin_/"
            className="hover:text-[#CCCCFF]"
          >
            <FaInstagram size={29} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
