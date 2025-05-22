
import React from "react";
import { ShieldCheck, ShieldAlert } from "lucide-react";


const ResultCard = ({ result }) => {
  if (!result) return null; // Handle case where result is undefined

  const isSafe = result.predicted_label?.toLowerCase() === "good";
  const confidenceScore = result.confidence_score ? result.confidence_score.toFixed(2) : "N/A";
  const length = result.length || "N/A";
  const numDigits = result.num_digits || "N/A";

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
      {result ? (
        <>
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
        </>
      ) : (
        <p className="text-gray-700">No result data available.</p>
      )}

      {/* Display Additional Features */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Features</h3>
        <ul className="text-gray-700 space-y-1">
          <li>
            <strong>Length:</strong> {length}
          </li>
          <li>
            <strong>Number of Digits:</strong> {numDigits}
          </li>
          <li>Number of Special Characters: {result.num_special_chars}</li>
          <li>Is Trusted Domain: {result.is_trusted_domain ? "Yes" : "No"}</li>
          <li>Suspicious Patterns Count: {result.suspicious_patterns_count}</li>
          <li>Domain Length: {result.domain_length}</li>
          <li>Subdomain Count: {result.subdomain_count}</li>
          <li>Is IP Address: {result.is_ip_address ? "Yes" : "No"}</li>
          <li>Has Valid TLD: {result.has_valid_tld ? "Yes" : "No"}</li>
          <li>Domain Entropy: {result.domain_entropy}</li>
          <li>TLD Length: {result.tld_length}</li>
          <li>Suspicious Keyword Count: {result.suspicious_keyword_count}</li>
        </ul>
      </div>
    </div>
  );
};

export default ResultCard;
