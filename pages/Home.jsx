
import React, { useState } from "react";

import VideoPlayer from "../components/Video";
import CheckURL from "../components/CheckURL";


const Home = () => {
    return (
      <div className="md:py-6 py-3">
        <div className="items-center justify-center h-fit flex flex-col p-6">
          <h1 className="md:text-6xl text-3xl md:w-[1000px] w-full font-bold text-secondary text-center">
            Stay Safe Online with AI – Instantly Detect Phishing Link.
          </h1>
          <p className="text-[#424242] w-full  md:flex md:w-[800px] mt-3 items-center justify-center">
            Protect Yourself from Cyber Threats with AI-Powered Security.
          </p>

          
          <CheckURL />
        </div>
        <div className="flex flex-col gap-12">
          <h1 className=" text-center text-3xl font-bold text-[#1B263B]">How It Works</h1>
          <VideoPlayer />
        </div>
        
      </div>
    );
};

export default Home;
