import React from "react";

const ConnectForm = () => {
  return (
    <div className="flex flex-col my-16 pl-28">
      <div className="my-10">
        <div className="bg-blue-500 h-1.5 w-10 mb-4"></div>
        <div className="text-blue-500 text-4xl font-bold mb-2">
          LET'S CONNECT
        </div>
        <p className="text-2xl text-gray-600">
          Contact our support team or make an appointment with our experts.
        </p>
      </div>

      <form className="md:mr-20">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
            <label
              htmlFor="name"
              className="block text-gray-600 text-sm font-semibold mb-1"
            >
              Name*
            </label>
            <input
              type="text"
              id="name"
              className="form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-500 w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-semibold mb-1"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              className="form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-500 w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div className="w-full md:w-1/3 mb-4">
            <label
              htmlFor="contactNumber"
              className="block text-gray-600 text-sm font-semibold mb-1"
            >
              Contact Number*
            </label>
            <input
              type="tel"
              id="contactNumber"
              className="form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-500 w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-600 text-sm font-semibold mb-1"
          >
            Subject*
          </label>
          <input
            type="text"
            id="subject"
            className="form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-500 w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-600 text-sm font-semibold mb-1"
          >
            Subject*
          </label>
          <input
            type="text"
            id="subject"
            className="form-input focus:outline-none focus:shadow-outline-blue focus:border-blue-500 w-full px-4 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-600 text-sm font-semibold mb-1"
          >
            Message*
          </label>
          <textarea
            id="message"
            className="form-textarea focus:outline-none focus:shadow-outline-blue focus:border-blue-500 w-full px-4 py-2 border rounded-md"
            rows={4}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ConnectForm;
