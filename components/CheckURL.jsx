


import React from "react";
import { useAppContext } from "../src/AppContext";
import ResultCard from "./ResultCard";
import { Loader2 } from "lucide-react";

const CheckURL = () => {
  const { state, dispatch } = useAppContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });

    console.log("Submitting URL:", state.url); // Log the URL being submitted

    try {
      const response = await fetch(
        "https://phishing-url-detection-api-with-enhanced.onrender.com/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: state.url }),
        }
      );

      console.log("API response status:", response.status); // Log the status of the API response
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log("API response data:", data); // Log the JSON data returned from the API

      // Assuming the API returns a JSON object compatible with ResultCard props
      dispatch({ type: "SET_RESULT", payload: data });
    } catch (error) {
      console.error("Error while fetching data:", error); // Log the error if something goes wrong
      dispatch({
        type: "SET_ERROR",
        payload: "An error occurred while checking the URL. Please try again.",
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return (
    <div className="container mx-auto my-8 px-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Check URL Safety
      </h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col md:flex-col gap-2 ">
          <textarea
            type="text"
            cols="100"
            rows="5"
            value={state.url}
            onChange={(e) =>
              dispatch({ type: "SET_URL", payload: e.target.value })
            }
            placeholder="Please paste your link here"
            className="flex-grow border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B263B] resize-none"
          ></textarea>
          <div className="flex gap-4 justify-center items-center mt-8">
            <input type="checkbox" required />
            <span className="text-justify">
              By submitting a URL, you agree to our Terms of Service and Privacy
              Policy. Your URL submission may be shared with the security
              community to enhance threat detection. Please avoid submitting any
              personal information, as we are not responsible for the contents
              of your submission.
            </span>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-[#1B263B] text-white h-14 w-40 rounded-md hover:bg-[#1B263B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              disabled={state.isLoading}
            >
              {state.isLoading ? (
                <Loader2 className="animate-spin h-5 w-5 mr-2" />
              ) : (
                "Check URL"
              )}
            </button>
          </div>
        </div>
      </form>
      {state.error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md mb-4"
          role="alert"
        >
          <strong className="font-bold mr-1">Error:</strong>
          <span className="block sm:inline">{state.error}</span>
        </div>
      )}
      {state.result && <ResultCard result={state.result} />}
    </div>
  );
};

export default CheckURL;
