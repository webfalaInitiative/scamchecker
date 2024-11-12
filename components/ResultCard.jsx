
import React from "react";
import { ShieldCheck, ShieldAlert } from "lucide-react";

const ResultCard = ({ result }) => {
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

      {/* URL Section */}
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">URL:</span> {result.url}
      </p>

      {/* Risk Score */}
      <div className="mt-4">
        <p className="font-semibold">Risk Score:</p>
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

      {/* Display Additional Features */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Features</h3>
        <ul className="text-gray-700 space-y-1">
          <li>Length: {result.length}</li>
          <li>Number of Digits: {result.num_digits}</li>
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
