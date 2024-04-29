import React, { useState } from "react";
import { HeaderNav } from "../utils/constant";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
const logo = "/images/webfala LOGO 1.png";

const Header = () => {
  const [showNav, setNav] = useState(false);

  return (
    <div
      className={`flex shadow-sm sticky md:top-0 z-50 bg-white justify-between py-4 px-10 md:px-mid md:py-tip`}
    >
      <Link to="/">
        <img className="w-[120px] my-auto h-fit" src={logo} alt="Logo" />
      </Link>
      <div
        className={`gap-10 flex-col md:top-0 md:bg-transparent md:relative md:text-black duration-300 md:flex-row absolute ${
          showNav
            ? "top-16 p-6 left-0 bg-primary text-white w-full"
            : "top-[-1000px]"
        } md:relative head text-lightBlack my-auto flex`}
      >
        {HeaderNav.map((nav) => (
          <NavLink
            onClick={() => setNav(false)}
            to={nav.path}
            className="hover:text-primary"
            key={nav.id}
          >
            {nav.name}
          </NavLink>
        ))}
      </div>

      <Link
        to="report"
        className="py-2 h-fit w-fit text-small md:flex hidden rounded-md px-4 bg-primary text-white"
      >
        Check site
      </Link>
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
