import React from "react";
import { informations, materials, pageLinks } from "../utils/constant";
import { Link, NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div className="text-white px-6 md:px-mid lg:px-12 bg-secondary py-mid">
      <div>
        <div className="flex text-[18px] md:px-20 lg:px-0 flex-col py-8">
          <div className="md:flex lg:justify-between">
            <div className="flex flex-col gap-3 mb-3">
              <h1 className="font-bold text-lg">QuickLinks</h1>
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
              <h1 className="font-bold text-lg">Legal Info</h1>
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
              <h1 className="font-bold text-lg">Contact Info</h1>
              {informations.map((information) => (
                <Link
                  className="flex items-center gap-2 whitespace-normal sm:whitespace-nowrap break-words"
                  key={information.id}
                  to={information.path}
                >
                  {information.icon}
                  <span className="break-words">{information.text}</span>
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
          src="../images/logofooter.jpg"
          alt=""
          className="w-[130.03px] h-[100.43px]"
        />
        <div className="flex gap-4">
          <span className="text-sm">Terms</span>
          <span className="text-sm">Privacy</span>
          <span>
            <img className="h-2 w-2 mt-2" src="../images/Cookies.png" alt="" />
          </span>
        </div>
        <div className="flex gap-1">
          <a href="https://www.linkedin.com/company/link-guard/">
            <img src="../images/Linkedin.png" alt="" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61565890179986&mibextid=ZbWKwL">
            <img src="../images/Facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/_linkguard_?igsh=MWM4ZHh1MWgzcWo0eg==">
            <img src="../images/Instagram.png" alt="" />
          </a>
          <a href="https://x.com/LinkGuard1?t=FWxT5L1LQNxGpTNNE7Npfg&s=09">
            <img src="../images/Twitter (2).png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
