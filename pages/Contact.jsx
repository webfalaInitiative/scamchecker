import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4 md:py-6 gap-6">
      {/* Contact Info Section */}
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-primary p-4 md:p-8 rounded-lg">
        <h3 className="font-bold text-xl mb-4 md:mb-6 text-center md:text-left text-white">
          Contact Info
        </h3>
        <ul className="space-y-8">
          <li className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <MapPin size={24} className="text-white" />
              <p className="text-xl font-bold text-white">Address</p>
            </div>
            <p className="text-white ml-8 md:ml-10 text-lg">
              4, Abidoye Lane, GRA, Ilorin, Kwara State, Nigeria.
            </p>
          </li>
          <li className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Phone size={24} className="text-white" />
              <p className="text-lg font-semibold text-white">Phone Number</p>
            </div>
            <p className="text-white ml-8 md:ml-10 text-lg">+234 8130333018</p>
          </li>
          <li className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Mail size={24} className="text-white" />
              <p className="text-lg font-semibold text-white">Email Address</p>
            </div>
            <p className="text-white ml-8 md:ml-10 text-lg">
              webfalainitiative@gmail.com
            </p>
          </li>
        </ul>
      </div>

      {/* Form Section */}
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-background p-4 md:p-8 rounded-lg"
      >
        <label htmlFor="fullName" className="text-lg font-medium">
          Full Name
        </label>
        <div className="py-2">
          <input
            id="fullName"
            type="text"
            className="h-10 w-full border border-gray-300 hover:border-green-500 outline-none pl-4 text-sm text-black rounded-md"
          />
        </div>

        <label htmlFor="email" className="text-lg font-medium">
          Email
        </label>
        <div className="py-2">
          <input
            id="email"
            type="email"
            className="h-10 w-full border border-gray-300 hover:border-green-500 outline-none pl-4 text-sm text-black rounded-md"
          />
        </div>

        <label htmlFor="phoneNumber" className="text-lg font-medium">
          Phone Number
        </label>
        <div className="py-2">
          <input
            id="phoneNumber"
            type="tel"
            className="h-10 w-full border border-gray-300 hover:border-green-500 outline-none pl-4 text-sm text-black rounded-md"
          />
        </div>

        <label htmlFor="message" className="text-lg font-medium">
          Message
        </label>
        <div className="py-2">
          <textarea
            id="message"
            className="w-full border border-gray-300 hover:border-green-500 outline-none resize-none p-4 text-sm text-black rounded-md h-32"
          ></textarea>
        </div>

        <div className="flex justify-center items-center py-4">
          <button className="h-12 w-full md:w-2/5 border border-primary bg-primary text-white rounded-md">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
