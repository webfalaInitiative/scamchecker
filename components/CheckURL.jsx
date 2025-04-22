import React, { useState } from "react";
import {
  AlertCircle,
  CheckCircle,
  Shield,
  X,
  AlertTriangle,
} from "lucide-react";

const CheckURL = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const [isValid, setIsValid] = useState(false);
  const[isVisible, setIsVisible] = useState(false);

  const validateURL = (input) => {
    try {
      const flexibleUrlPattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3})" + // OR IP (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // optional port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // optional query string
          "(\\#[-a-z\\d_]*)?$", // optional fragment locator
        "i"
      );

      if (!input) {
        setValidationMessage("Please enter a URL");
        setIsValid(false);
        return false;
      }

      // Check URL against flexible pattern
      if (!flexibleUrlPattern.test(input)) {
        setValidationMessage("Please enter a valid URL format.");
        setIsValid(false);
        return false;
      }

      // Add "https://" if missing to ensure proper analysis
      // if (!input.startsWith("http://") && !input.startsWith("https://")) {
      //   setValidationMessage('Adding "https://" to ensure proper analysis');
      //   input = "https://" + input;
      // } else {
      //   setValidationMessage("URL format is valid");
      // }

      setIsValid(true);
      return true;
    } catch (e) {
      setValidationMessage("Invalid URL format");
      setIsValid(false);
      return false;
    }
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setUrl(input);
    validateURL(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateURL(url)) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const finalUrl =
        !url.startsWith("http://") && !url.startsWith("https://")
          ? `https://${url}`
          : url;

      const response = await fetch(
        "https://phishing-url-detection-api-with-enhanced.onrender.com/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: finalUrl }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail);
      }

      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getRiskColor = (score) => {
    const percentage = parseFloat(score);
    if (percentage > 50) return "text-green-500";
    if (percentage >= 30 && percentage < 50) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* Main Card */}
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
          <Shield className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl sm:text-xl  font-bold text-gray-800">
            URL Safety Checker
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <div className="relative">
              <textarea
                type="text"
                cols={100}
                rows={5}
                value={url}
                onChange={handleInputChange}
                placeholder="Enter URL"
                className={`w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:border-transparent ${
                  isValid
                    ? "border-green-300 focus:ring-green-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
                style={{ minWidth: "0" }} // Ensures it shrinks with smaller screens
              ></textarea>
              {url && (
                <div className="absolute right-3 top-2.5">
                  {isValid ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  )}
                </div>
              )}
            </div>

            {/* Validation Message */}
            {validationMessage && (
              <div
                className={`flex items-center gap-2 text-sm ${
                  isValid ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {isValid ? (
                  <CheckCircle className="h-4 w-4" />
                ) : (
                  <AlertTriangle className="h-4 w-4" />
                )}
                {validationMessage}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || !isValid}
            className={`w-full px-6 py-2 rounded-lg font-medium text-white transition-colors ${
              loading || !isValid
                ? "bg-[#1B263B] cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Analyzing..." : "Check URL"}
          </button>
        </form>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Main Results Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-4">
            <h2 className="text-xl sm:text-lg font-bold text-gray-800 mb-4">
              Analysis Results: This URL is {result.label}
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                <span className="font-medium text-gray-700">Analyzed URL:</span>
                <span className="font-mono text-gray-600 truncate overflow-hidden w-48 sm:w-auto">
                  {result.url}
                </span>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                <span className="font-medium text-gray-700">Safety Score:</span>
                <span
                  className={`text-2xl font-bold ${getRiskColor(
                    result.safety_score
                  )}`}
                >
                  {result.safety_score}
                </span>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                <span className="font-medium text-gray-700">
                  Classification:
                </span>
                <span
                  className={`px-4 py-1 rounded-full font-medium ${
                    result.label === "Safe"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {result.label.charAt(0).toUpperCase() + result.label.slice(1)}
                </span>
              </div>
            </div>
          </div>

          
          <div className="p-4 max-w-3xl mx-auto">
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              {isVisible ? "Hide Features" : "Show Features"}
            </button>

            {isVisible && (
              <div className="mt-4 bg-white rounded-lg shadow-lg p-6 sm:p-4">
                <h2 className="text-xl sm:text-lg font-bold text-gray-800 mb-4">
                  Detailed Features
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Object.entries(result.url_info).map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-gray-50 p-3 rounded-lg flex items-center justify-between"
                    >
                      <span className="font-medium text-gray-700 capitalize">
                        {key.replace(/_/g, " ")}:
                      </span>
                      <span className="flex items-center gap-2">
                        {typeof value === "boolean" ? (
                          value ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )
                        ) : (
                          <span className="font-mono text-gray-600 truncate">
                            {value}
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckURL;
