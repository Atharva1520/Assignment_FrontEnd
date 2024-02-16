import React from "react";

const Hero = () => {
  const handleButtonClick = () => {
    window.location.href =
      "https://www.bluetickconsultants.com/generative-ai.html";
  };

  return (
    <section className="py-4 px-6 md:px-20 mt-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="md:ml-8 flex flex-col w-full md:w-2/3">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-grey-900">
              TRANSFORMING ENTERPRISES
            </h2>
            <p className="text-2xl font-bold mb-4 text-gray-600">
              with cutting-edge, scalable, privacy-
              <br />
              focused Generative AI Solutions Another line of text
            </p>
          </div>

          <div className="pt-14 w-full md:w-2/4 gap-4">
            <p className="text-lg text-black mb-4">
              Founded in 2017, Bluetick Consultants is a technology-driven firm
              that has made a significant impact in the Indian and US startup
              ecosystems.
            </p>
            <p className="text-lg text-black mb-4">
              Transforming Enterprises with cutting-edge, scalable,
              privacy-focused Generative AI Solutions
            </p>
          </div>
          <div className="text-center flex items-start mt-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleButtonClick}
            >
              To Know More About Us
            </button>
          </div>
        </div>
        <div className="w-full md:w-2/3 h-2/3 mt-6 md:mt-0">
          <img
            src="assets/img.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
