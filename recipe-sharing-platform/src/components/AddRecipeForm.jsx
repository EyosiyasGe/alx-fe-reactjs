import React from "react";

function ContactForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-lg space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
          Contact Us
        </h2>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Write your message..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
