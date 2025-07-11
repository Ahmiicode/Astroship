import React from "react";

export default function Contact() {
  return (
    <section className="bg-white text-slate-900 py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold mb-4">Contact</h2>
        <p className="text-xl text-gray-600">We are here to help.</p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Contact Info */}
        <div className="space-y-6">
          <h3 className="text-4xl font-semibold mb-4">Contact Astroship</h3>
          <p className="text-gray-700 text-xl">
            Have something to say? We are here to help. Fill up the form or send an email or call phone.
          </p>

          <div className="space-y-4  text-2xl text-gray-800">
            <p className="hover:underline">1734 Sanfransico, CA 93063</p>
            <p> <a href="mailto:hello@astroshipstarter.com" className=" hover:underline">hello@astroshipstarter.com</a></p>
            <p> <a href="tel:+19874587899" className=" hover:underline">+1 (987) 4587 899</a></p>
          </div>
        </div>

        {/* Right Contact Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="fullname" className="block mb-2 font-semibold">Full Name</label>
            <input
              type="text"
              id="fullname"
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-md px-4 py-3 outline-1 focus:outline-2 focus:ring-2 focus:ring-slate-900"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              className="w-full border outline-1 border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">Your Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full border outline-1 border-gray-300 rounded-md px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-slate-900"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-slate-900 w-full text-white px-6 py-3 rounded-md font-semibold hover:bg-black transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
