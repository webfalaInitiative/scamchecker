import React from "react";

const About = () => {
  return (
    <div className="container mx-auto my-8 max-w-2xl px-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">
        About LinkGuard
      </h1>
      <p className="text-gray-700 text-justify">
        <b className="text-primary">LinkGuard</b> is an innovative platform
        developed by Webfala Digital Skills for All Initiative, dedicated to
        providing a secure digital environment by detecting phishing and scam
        URLs using advanced Artificial Intelligence (AI) technology. Our mission
        is to empower individuals, businesses, and organizations to navigate the
        internet confidently by offering state-of-the-art tools that safeguard
        them from online threats. In today’s digital age, cyber threats like
        phishing and scam attacks have become increasingly sophisticated. At
        LinkGuard, we leverage AI's power to stay ahead of these threats,
        offering real-time protection and insights to our users. We are
        committed to enhancing online safety, promoting digital literacy, and
        ensuring that every internet user can enjoy a secure browsing
        experience.
      </p>
      <div className="py-12">
        <h1 className="text-3xl font-bold mb-12 text-gray-800 text-center">
          Key Features
        </h1>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-4">
            <img
              src="../images/scamtool.svg"
              alt=""
              className="h-32 w-32 md:h-1/2 md:w-1/2"
            />
            <div className="flex flex-col md:text-justify text-center">
              <h1 className="font-bold text-2xl">Scam Reporting Tool</h1>
              <p className="font-light text-gray-500 mb-4 max-w-xs mx-auto">
                A built-in reporting tool enables users to report suspicious
                URLs, contributing to our growing database and enhancing the
                platform's threat detection capabilities.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex flex-col md:text-justify text-center order-1 md:order-1">
              <h1 className="font-bold text-2xl">Real-Time Monitoring</h1>
              <p className="font-light text-gray-500 mb-4 max-w-xs mx-auto">
                The platform offers continuous, real-time monitoring of URLs to
                detect suspicious activities immediately, providing instant
                alerts to users about potential risks.
              </p>
            </div>
            <img
              src="/images/realtime.png"
              alt=""
              className="h-32 w-32 md:h-1/2 md:w-1/2 order-0 md:order-1"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <img
              src="/images/userfriendly.png"
              alt=""
              className="h-32 w-32 md:h-1/2 md:w-1/2"
            />
            <div className="flex flex-col md:text-justify text-center">
              <h1 className="font-bold text-2xl">User-Friendly Interface</h1>
              <p className="font-light text-gray-500 mb-4 max-w-xs mx-auto">
                Designed with simplicity in mind, LinkGuard’s interface is
                intuitive and easy to use, catering to both tech-savvy
                individuals and those new to online security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


<div className="max-w-3xl mx-auto text-left px-4">
  <p className="text-gray-700 leading-relaxed">
    <span className="text-blue-600 font-semibold">LinkGuard</span> is an
    innovative platform developed by Webfala Digital Skills for All Initiative,
    dedicated to providing a secure digital environment by detecting phishing
    and scam URLs using advanced Artificial Intelligence (AI) technology. Our
    mission is to empower individuals, businesses, and organizations to navigate
    the internet confidently by offering state-of-the-art tools that safeguard
    them from online threats. In today’s digital age, cyber threats like
    phishing and scam attacks have become increasingly sophisticated. At
    LinkGuard, we leverage AI's power to stay ahead of these threats, offering
    real-time protection and insights to our users. We are committed to
    enhancing online safety, promoting digital literacy, and ensuring that every
    internet user can enjoy a secure browsing experience.
  </p>
</div>;
