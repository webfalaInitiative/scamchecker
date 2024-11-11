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
      <h3 className="text-xl font-semibold mt-6 mb-2">Features</h3>
    
      <ul className="space-y-2">
      
        <li>
          <strong>Length:</strong> {result?.features?.length}
          
        </li>
      
        <li>
          <strong>Number of Digits:</strong> {result?.features?.num_digits}
          
        </li>
        
        <li>
           <strong>Number of Special Characters:</strong>
          {result?.features?.num_special_chars}
          
        </li>
        
        <li>
         <strong>Is Trusted Domain:</strong> 
          {result?.features?.is_trusted_domain ? "Yes" : "No"}
      
        </li>
        
        <li>
          <strong>Suspicious Patterns Count:</strong> 
          {result?.features?.suspicious_patterns_count}
          
        </li>
        
        <li>
        <strong>Domain Length:</strong> {result?.features?.domain_length}
        
        </li>
        
        <li>
         <strong>Subdomain Count:</strong>{" "}
          {result?.features?.subdomain_count}
          
        </li>
      
        <li>
          <strong>Is IP Address:</strong> 
          {result?.features?.is_ip_address ? "Yes" : "No"}
          
        </li>
        
        <li>
           <strong>Has Valid TLD:</strong> 
          {result?.features?.has_valid_tld ? "Yes" : "No"}
          
        </li>
        
        <li>
           <strong>Domain Entropy:</strong> 
          {result?.features?.domain_entropy?.toFixed(2)}
        
        </li>
        
        <li>
           <strong>TLD Length:</strong> {result?.features?.tld_length}
          
        </li>
        
        <li>
           <strong>Suspicious Keyword Count:</strong> 
          {result?.features?.suspicious_keyword_count}
          
        </li>
        
        <li>
          <strong>Multiple TLDs:</strong> 
          {result?.features?.multiple_tlds ? "Yes" : "No"}
          
        </li>
        
        <li>
          <strong>Excessive Delimiters:</strong> 
          {result?.features?.excessive_delimiters ? "Yes" : "No"}
          
        </li>
        
        <li>
        <strong>Has Currency Symbol:</strong> 
          {result?.features?.has_currency_symbol ? "Yes" : "No"}
        
        </li>
        
      </ul>
    </div>
  );
};
export default ResultCard;

// import React from "react";
// import { ShieldCheck, ShieldAlert } from "lucide-react";

// const ResultCard = ({ result }) => {
//   // Add default values and safeguard against undefined result
//   const riskClassification =
//     result?.risk_classification?.toLowerCase() || "unknown"; // Default to 'unknown' if undefined
//   const isSafe = riskClassification === "good";
//   const confidenceScore = result?.risk_score
//     ? parseFloat(result.risk_score)
//     : 0; // Default to 0 if undefined

//   return (
//     <div
//       className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
//         isSafe ? "border-green-500" : "border-red-500"
//       }`}
//     >
//       <div className="flex items-center mb-4">
//         {isSafe ? (
//           <ShieldCheck className="w-8 h-8 text-green-500 mr-2" />
//         ) : (
//           <ShieldAlert className="w-8 h-8 text-red-500 mr-2" />
//         )}
//         <h2 className="text-2xl font-bold">
//           {isSafe ? "Safe" : "Potentially Unsafe"}
//         </h2>
//       </div>
//       <p className="text-gray-700 mb-2">
//         <span className="font-semibold">Risk Classification:</span>{" "}
//         {riskClassification}
//       </p>
//       <p className="text-gray-700 mb-2">
//         <span className="font-semibold">URL:</span>{" "}
//         <a href={result?.url} target="_blank" rel="noopener noreferrer">
//           {result?.url}
//         </a>
//       </p>

//       <div className="mt-4">
//         <p className="text-sm text-gray-600 mb-1">Risk Score</p>
//         <div className="w-full bg-gray-200 rounded-full h-2.5">
//           <div
//             className={`h-2.5 rounded-full ${
//               isSafe ? "bg-green-500" : "bg-red-500"
//             }`}
//             style={{ width: `${confidenceScore}%` }}
//           ></div>
//         </div>
//         <p className="text-right text-sm text-gray-600 mt-1">
//           {confidenceScore.toFixed(2)}%
//         </p>
//       </div>

//       <h3 className="text-xl font-semibold mt-6 mb-2">Features</h3>
//       <ul className="space-y-2">
//         <li>
//           <strong>Length:</strong> {result?.features?.length}
//         </li>
//         <li>
//           <strong>Number of Digits:</strong> {result?.features?.num_digits}
//         </li>
//         <li>
//           <strong>Number of Special Characters:</strong>{" "}
//           {result?.features?.num_special_chars}
//         </li>
//         <li>
//           <strong>Is Trusted Domain:</strong>{" "}
//           {result?.features?.is_trusted_domain ? "Yes" : "No"}
//         </li>
//         <li>
//           <strong>Suspicious Patterns Count:</strong>{" "}
//           {result?.features?.suspicious_patterns_count}
//         </li>
//         <li>
//           <strong>Domain Length:</strong> {result?.features?.domain_length}
//         </li>
//         <li>
//           <strong>Subdomain Count:</strong> {result?.features?.subdomain_count}
//         </li>
//         <li>
//           <strong>Is IP Address:</strong>{" "}
//           {result?.features?.is_ip_address ? "Yes" : "No"}
//         </li>
//         <li>
//           <strong>Has Valid TLD:</strong>{" "}
//           {result?.features?.has_valid_tld ? "Yes" : "No"}
//         </li>
//         <li>
//           <strong>Domain Entropy:</strong>{" "}
//           {result?.features?.domain_entropy?.toFixed(2)}
//         </li>
//         <li>
//           <strong>TLD Length:</strong> {result?.features?.tld_length}
//         </li>
//         <li>
//           <strong>Suspicious Keyword Count:</strong>{" "}
//           {result?.features?.suspicious_keyword_count}
//         </li>
//         <li>
//           <strong>Multiple TLDs:</strong>{" "}
//           {result?.features?.multiple_tlds ? "Yes" : "No"}
//         </li>
//         <li>
//           <strong>Excessive Delimiters:</strong>{" "}
//           {result?.features?.excessive_delimiters ? "Yes" : "No"}
//         </li>
//         <li>
//           <strong>Has Currency Symbol:</strong>{" "}
//           {result?.features?.has_currency_symbol ? "Yes" : "No"}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default ResultCard;
