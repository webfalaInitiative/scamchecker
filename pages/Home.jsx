
import React, { useState } from "react";
// import { useAppContext } from "../src/AppContext";
// import ResultCard from "../components/ResultCard";
// import { Loader2 } from "lucide-react";
// import { Recaptha } from "./Recaptha"; 
import VideoPlayer from "../components/Video";
import CheckURL from "../components/CheckURL";


const Home = () => {
    return (
      <div className="md:py-6 py-3">
        <div className="items-center justify-center h-fit flex flex-col p-6">
          <h1 className="md:text-6xl text-3xl md:w-[1000px] w-full font-bold text-secondary text-center">
            Stay Safe Online with AI – Instantly Detect Phishing Links
          </h1>
          <p className="text-[#424242] w-full  md:flex md:w-[800px] mt-3 items-center justify-center">
            Protect Yourself from Cyber Threats with AI-Powered Security.
          </p>

          {/* <form onSubmit={handleSubmit} className="flex mt-5">
          <textarea
            value={state.url || ""}
            onChange={(e) =>
              dispatch({ type: "SET_URL", payload: e.target.value })
            }
            placeholder="Please paste your link here"
            className="h-full pt-3 pl-3 pr-6 md:pr-32 outline-none w-full border-2 border-light rounded-md resize-none"
          ></textarea>
          <button
            type="submit" // Ensure this is set to submit
            className="bg-[#1B263B] text-white h-10 w-40 px-6 mt-4 rounded-md"
            disabled={state.isLoading || !state.url}
          >
            {state.isLoading ? (
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
            ) : (
              "Check Now"
            )}
          </button>
        </form> */}
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
