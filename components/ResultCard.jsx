import React from 'react';
import {
  ShieldCheck,
  ShieldAlert,
  
} from "lucide-react";


const ResultCard = ({result}) => {
    const isSafe = result.predicted_label.toLowerCase() === "good";
  const confidenceScore = result.confidence_score.toFixed(2);

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
        isSafe ? "border-green-500" : "border-red-500"
      }`}
    >
      <div className="flex items-center mb-4">
        {isSafe ? (
          <ShieldCheck className="w-8 h-8 text-green-500 mr-2" />
        ) : (
          <ShieldAlert className="w-8 h-8 text-red-500 mr-2" />
        )}
        <h2 className="text-2xl font-bold">
          {isSafe ? "Safe" : "Potentially Unsafe"}
        </h2>
      </div>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Predicted Label:</span>{" "}
        {result.predicted_label}
      </p>
      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-1">Confidence Score</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full ${
              isSafe ? "bg-green-500" : "bg-red-500"
            }`}
            style={{ width: `${confidenceScore}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-gray-600 mt-1">
          {confidenceScore}%
        </p>
      </div>
    </div>
  );
};

  

export default ResultCard


    