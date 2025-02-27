import React from "react";

export default function Contact() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="text-lg mb-4">Have any questions? Feel free to reach out!</p>

      <form className="max-w-md mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-left font-medium">Name:</label>
          <input 
            type="text" 
            className="w-full p-2 border border-gray-300 rounded" 
            placeholder="Enter your name" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-left font-medium">Email:</label>
          <input 
            type="email" 
            className="w-full p-2 border border-gray-300 rounded" 
            placeholder="Enter your email" 
          />
        </div>

        <div className="mb-4">
          <label className="block text-left font-medium">Message:</label>
          <textarea 
            className="w-full p-2 border border-gray-300 rounded" 
            rows="4"
            placeholder="Type your message"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send Message
        </button>
      </form>

      <div className="mt-6">
        <p className="text-lg"> Address: 123 Tech Street, Silicon Valley</p>
        <p className="text-lg"> Email: support@pedrotech.com</p>
        <p className="text-lg"> Phone: +1 234 567 890</p>
      </div>
    </div>
  );
}
