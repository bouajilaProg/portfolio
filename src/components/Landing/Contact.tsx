import React from "react";

function Contact() {
  return (
    <div id="contact" className="flex items-center justify-center min-h-screen">
      <div className=" p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Contact Me
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-6 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-6 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-6 py-3 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-32"
              placeholder="Your Message"
            >
            </textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-6 px-6 py-3 inline-block bg-blue-700 text-gray-50 font-medium text-lg rounded-md hover:bg-blue-600 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
