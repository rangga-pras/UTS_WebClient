import React from 'react';

export default function Contact() {
  return (
    <div className="font-sans bg-[#191919] text-black">
      {/* Navbar */}
      <header className="w-full bg-transparent text-white py-4 px-6 flex justify-between items-center">
        <div className="font-semibold text-sm md:text-base">@Ayush Barnwal</div>
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:underline">About</a>
          <a href="/#work" className="hover:underline">Work</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </header>

      {/* Contact Section */}
      <section className="min-h-screen px-6 py-20 bg-[#f3f4f6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 shadow-lg bg-white">
          {/* Kontak */}
          <div className="bg-[#191919] text-white p-10 flex flex-col justify-center items-start gap-6">
            <img
              src="/assets/images/person.png"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover"
            />
            <div className="space-y-1 text-sm text-gray-300">
              <p>ayush.barnwal@brightscout.com</p>
              <p>+91 8651447521</p>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-200">
              <a href="#" className="hover:underline block">Linkedin</a>
              <a href="#" className="hover:underline block">Instagram</a>
              <a href="#" className="hover:underline block">Twitter</a>
              <a href="#" className="hover:underline block">Webflow</a>
              <a href="#" className="hover:underline block">Figma</a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-10">
            <h2 className="text-2xl font-bold mb-8">Let’s build something cool together</h2>
            <form className="flex flex-col gap-6 text-sm">
              <div>
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  placeholder="James Robert"
                  className="w-full border-b border-gray-400 focus:outline-none py-1 bg-transparent"
                />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="ayush.barnwal@brightscout.com"
                  className="w-full border-b border-gray-400 focus:outline-none py-1 bg-transparent"
                />
              </div>
              <div>
                <label className="block mb-1">Subject</label>
                <input
                  type="text"
                  placeholder="For web design work Enquire"
                  className="w-full border-b border-gray-400 focus:outline-none py-1 bg-transparent"
                />
              </div>
              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  placeholder="Type your Message"
                  rows="4"
                  className="w-full border-b border-gray-400 focus:outline-none py-1 resize-none bg-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition w-max mt-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-20">
        <div className="max-w-6xl mx-auto flex flex-col justify-between h-full">
          <div className="flex justify-between items-center flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <img
                src="/assets/images/person.png"
                alt="Profile"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-xl md:text-2xl font-semibold">Have something in mind?</p>
                <p className="text-3xl md:text-5xl font-bold">let’s build it together.</p>
              </div>
            </div>

            <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
              Get in touch
            </button>
          </div>
          <div className="flex justify-between items-center mt-12 flex-wrap gap-4 text-sm">
            <p className="text-gray-400">
              Build with <span className="text-pink-500">💖</span> by Brightscout & Ayush
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:underline">Linkedin</a>
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">Instagram</a>
              <a href="#" className="hover:underline">Webflow</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
