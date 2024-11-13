
import React, { useState } from "react";
import { HeaderNav } from "../utils/constant";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const logo = "/images/nav.png";

const Header = () => {
  const [showNav, setNav] = useState(false);
  const [language, setLanguage] = useState("en"); // State for selected language

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    console.log("Selected language:", selectedLanguage); // Implement further logic for language change here
  };

  return (
    <div className="flex items-center justify-between shadow-sm sticky md:top-0 z-10 bg-white py-4 px-10">
      <Link to="/">
        <img
          className="w-24 sm:w-40 md:w-36 my-auto h-auto"
          src={logo}
          alt="Logo"
        />
      </Link>

      <div
        className={`flex gap-3 md:flex-row flex-col ${
          showNav
            ? "absolute top-5 left-0 bg-secondary text-white w-full p-6"
            : "hidden md:flex"
        }`}
      >
        {HeaderNav.map((nav) => (
          <NavLink
            onClick={() => setNav(false)}
            to={nav.path}
            className="hover:text-primary mx-2"
            key={nav.id}
          >
            {nav.name}
          </NavLink>
        ))}
        <div className="relative mx-2 flex">
          <img
            src="/images/Vector.png"
            className="h-4 w-4 mr-1 mt-1 pointer-events-none"
            alt="Translation Icon"
          />
          <select
            name="language"
            id="language-selector"
            onChange={changeLanguage}
            value={language}
            className="border-0 outline-none focus:ring-0 bg-transparent"
          >
            <option value="en">English</option>
            <option value="ig">Igbo</option>
            <option value="yo">Yoruba</option>
            <option value="ha">Hausa</option>
          </select>
        </div>
      </div>
      <div
        onClick={() => setNav(!showNav)}
        className="my-auto font-bold text-2xl text-primary md:hidden flex"
      >
        {showNav ? <IoMdClose /> : <RxHamburgerMenu />}
      </div>
    </div>
  );
};

export default Header;
