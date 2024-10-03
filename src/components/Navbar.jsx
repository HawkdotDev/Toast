import { useState, useEffect } from "react";
import { close, menu } from "../assets";
import  textLogo  from "../assets/Company/textLogo.png"
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full flex pt-5 pb-3 pl-8 pr-12 justify-between items-center fixed z-[99] transition-colors duration-300 ${
        scrolled ? "bg-[#141414] border-b border-yellow-200" : "bg-transparent"
      }`}
    >
      <img src={textLogo} alt="toast" className="w-auto h-[38px]" />

      <ul className="list-none lg:flex hidden justify-end items-center flex-1">
  {navLinks.map((nav, index) => (
    <li
      key={nav.id}
      className={`relative group font-poppins font-normal cursor-pointer text-[16px] ${
        active === nav.title ? "text-white" : "text-dimWhite"
      } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
      onClick={() => setActive(nav.title)}
    >
      <a href={`#${nav.id}`}>{nav.title}</a>
      {/* Dropdown Menu */}
      <div className="absolute right-0 hidden group-hover:block text-nowrap p-2 bg-white text-black rounded-md shadow-lg mt-2">
        <ul className="list-none">
          <li className="px-4 py-2 hover:bg-gray-200">
            <a href={`#${nav.id}-sub1`}>Sub Item 1</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-200">
            <a href={`#${nav.id}-sub2`}>Sub Item 2</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-200">
            <a href={`#${nav.id}-sub3`}>Sub Item 3</a>
          </li>
        </ul>
      </div>
    </li>
  ))}
</ul>


      <div className="lg:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#141414]-gradient absolute top-16 right-0 mx-4 min-w-[70%] rounded-md sidebar bg-blue-300/95 mt-1`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black" : "text-stone-800"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
