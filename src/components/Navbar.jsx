import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import LogoShow from "./LogoShow";

const Navbar = () => {
  return (
    <div className="relative w-full flex justify-start items-center bg-[#d7b173] pb-1 shadow-lg z-50">
      <div className="w-full flex justify-start items-center bg-primary py-6 pl-5 gap-2">
        <Link
          href="http://wa.me/212675480018"
          target="_blank"
          className="text-[#d7b173]"
        >
          <FaWhatsapp size={25} />
        </Link>
        <Link
          href="https://www.instagram.com/lesalamamarrakech/"
          target="_blank"
          className="text-[#d7b173]"
        >
          <FaInstagram size={25} />
        </Link>
      </div>
      <div className="absolute top-6 w-full flex justify-center items-center">
        <LogoShow />
      </div>
    </div>
  );
};

export default Navbar;
