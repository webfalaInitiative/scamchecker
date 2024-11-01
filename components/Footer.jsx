import React from "react";
import {  informations, materials, pageLinks } from "../utils/constant";
import { Link, NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div className="text-white px-6 md:px-mid bg-[#E63946] py-mid">
      <div className="">
        <div className="flex text-[18px] md:px-20 flex-col py-8 ">
          <div className="md:flex justify-between ">
            <div className="flex flex-col gap-3 mb-3">
              <h1 className="font-bold text-lg ">QuickLinks</h1>
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
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-lg ">Legal Info</h1>
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
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-lg ">Contact Info</h1>
              {informations.map((information) => (
                <Link
                  className="whitespace-nowrap flex items-center gap-2"
                  key={information.id}
                  to={information.path}
                >
                  {information.icon}
                  {information.text}
                </Link>
              ))}
            </div>
            <div className="md:flex flex-col gap-6">
              <h1 className="font-bold text-lg mb-2">Subscribe</h1>
              <form
                className="flex relative"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  placeholder=""
                  className="w-full outline-none pl-5 pr-32 text-sm text-black rounded-md h-[35px]"
                  type="text"
                />
                <button className="bg-[#929292] absolute right-0 top-0 h-[35px] rounded-r px-4">
                  <img src="/images/Path.png" alt="" />
                </button>
              </form>
              <span>© 2024 PhishGuard. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col md:flex-row md:justify-between items-center p-8 space-y-4 md:space-y-0">
        <img
          src="../images/nav.png"
          alt=""
          className="w-[80px] h-[100px] md:w-[150px] md:h-[200px]"
        />
        <div className="flex gap-4 text-white">
          <span className="text-sm">Terms</span>
          <span className="text-sm">Privacy</span>
          <span>
            <img
              className="h-3 w-3 mt-1"
              src="../images/Cookies.png"
              alt="Cookies"
            />
          </span>
        </div>
        <div className="flex gap-4">
          <a href="">
            <img
              className="w-6 h-6"
              src="../images/Linkedin.png"
              alt="LinkedIn"
            />
          </a>
          <a href="">
            <img
              className="w-6 h-6"
              src="../images/Facebook.png"
              alt="Facebook"
            />
          </a>
          <a href="">
            <img
              className="w-6 h-6"
              src="../images/Twitter.png"
              alt="Twitter"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
