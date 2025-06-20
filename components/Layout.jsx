import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Chat from "./Chat";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Chat />
      <Footer />
    </div>
  );
};

export default Layout;
