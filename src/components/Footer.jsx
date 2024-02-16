import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-700">
      <div>
        <h1 className="w-full text-3xl font-bold text-black">
          Bluetick Consultants LLP
        </h1>
        <p className="py-4 text-gray-700">contact@bluetickconsultants.com</p>
      </div>
      <div className="lg:col-span-3 flex justify-between mt-6">
        <div>
          <h2 className="font-medium text-gray-900 cursor-pointer">Blogs</h2>
        </div>
        <div>
          <h2 className="font-medium text-gray-900 cursor-pointer">
            Talk to Code
          </h2>
        </div>
        <div>
          <h2 className="font-medium text-gray-900 cursor-pointer">
            InterviewGPT
          </h2>
        </div>
        <div>
          <h2 className="font-medium text-gray-900 cursor-pointer">
            Privacy Doc
          </h2>
        </div>
        <div>
          <h2 className="font-medium text-gray-900 cursor-pointer">
            Sales Call Evaluator
          </h2>
        </div>
      </div>
      <div className="flex justify-between md:w-[75%] my-6">
        <FaFacebookSquare size={30} />
        <FaInstagram size={30} />
        <FaTwitterSquare size={30} />
        <FaGithubSquare size={30} />
        <FaDribbbleSquare size={30} />
      </div>
      <p className="flex items-center justify-end">
        2024 © All rights reserved by Bluetick Consultants LLP
      </p>
    </div>
  );
};

export default Footer;
