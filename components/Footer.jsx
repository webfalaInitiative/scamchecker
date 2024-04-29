import React from "react";
import { materials, pageLinks } from "../utils/constant";
import { Link, NavLink } from "react-router-dom";
const whiteLogo = "/public/images/webfala LOGO 1.png";

const Footer = () => {
  return (
    <div className="text-white px-6 md:px-mid bg-primary py-mid">
      <div className="md:grid grid-cols-2">
        <div className="flex flex-col gap-12">
          <div>
            <img className="w-[150px] mb-10 h-fit" src={whiteLogo} alt="Logo" />
            <p className="text-[18px]">
              Our scam checker utilizes cutting-edge technology and algorithms
              to thoroughly examine potential scams
            </p>
          </div>
          <p className="text-[18px] ">
            No 14. Station Road, G.R.A, Ilorin, Kwara, Nigeria.
          </p>
          <div></div>
        </div>
        <div className="flex text-[18px] md:px-20 flex-col gap-12">
          <div className="md:flex gap-12">
            <div className="flex head flex-col gap-5">
              {pageLinks.map((link) => (
                <NavLink
                  className="whitespace-nowrap"
                  key={link.id}
                  to={link.path}
                >
                  {link.text}
                </NavLink>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              {materials.map((material) => (
                <Link
                  className="whitespace-nowrap"
                  key={material.id}
                  to={material.path}
                >
                  {material.text}
                </Link>
              ))}
            </div>
          </div>
          <div>
            {/* <form
              className="flex relative"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                placeholder="Subscribe to our Newsletter"
                className="w-full outline-none pl-5 pr-32 text-sm text-black rounded-md h-[35px]"
                type="text"
              />
              <button className="bg-gold absolute right-0 top-0 h-[35px] rounded-md px-4">
                Subscribe
              </button>
            </form> */}
          </div>
        </div>
      </div>
      <hr />
      <div className="md:flex justify-between">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
