import React, { useEffect, useState } from 'react';

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showIntroText, setShowIntroText] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="fixed w-full top-0 z-50 transition-all duration-300">
        {scrolled ? (
          // Sticky mode
          <div className="flex justify-end px-6 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="bg-black text-white px-4 py-2 rounded-full shadow-lg text-xl font-bold"
              aria-label="Open Sidebar"
            >
              ☰
            </button>
          </div>
        ) : (
          // Normal transparent navbar
          <nav className="flex justify-between items-center px-6 py-4 text-black">
            <div className="font-semibold text-base md:text-lg">@Ayush Barnwal</div>
            <div className="flex gap-6 text-sm">
              <a href="#about" className="hover:underline transition">About</a>
              <a href="/contact" className="hover:underline transition">Contact</a>
            </div>
          </nav>
        )}
      </header>

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-black text-white z-50 shadow-lg px-6 py-10 flex flex-col justify-between">
          <div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-4 right-4 text-2xl"
            >
              ✕
            </button>
            <div className="flex flex-col gap-6 mt-10 text-lg">
              <a href="#about" onClick={() => setSidebarOpen(false)} className="hover:underline">About</a>
              <a href="/contact" onClick={() => setSidebarOpen(false)} className="hover:underline">Contact</a>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm text-gray-300">
            <a href="#" className="hover:underline">LinkedIn</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Webflow</a>
            <a href="#" className="hover:underline">Twitter</a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative h-screen bg-[#dce1e9] overflow-hidden flex items-center justify-center px-6">
        <div className="absolute top-[48%] w-full whitespace-nowrap overflow-hidden z-20">
          <h1 className="text-[2.5rem] md:text-[4rem] font-bold text-white animate-marquee inline-block">
            Webflow Developer — UI/UX Designer &nbsp;&nbsp; Webflow Developer — UI/UX Designer
          </h1>
        </div>

        <img
          src="/assets/images/person.png"
          alt="Hero"
          className="w-[260px] md:w-[340px] lg:w-[400px] z-10 relative object-contain"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
          <button
            onClick={() => setShowIntroText(true)}
            className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-xl hover:opacity-90 transition"
          >
            👋
            {showIntroText && (
              <span className="text-sm font-medium">Hi I’m Ayush</span>
            )}
          </button>
        </div>
      </section>

      {/* About & Recent Work */}
      <section id="about" className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* About */}
          <div>
            <h2 className="text-sm font-semibold uppercase mb-4 tracking-widest text-gray-600">About</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Recent Work */}
          <div>
            <h2 className="text-sm font-semibold uppercase mb-4 tracking-widest text-gray-600 text-right">Recent Work</h2>
            <div className="space-y-4">
              {["Decodable.co", "Gofirefly.io", "Blinkops.com", "Withkanvas.com"].map((site, i) => (
                <div key={i} className="border-t pt-4 flex items-start justify-between group">
                  <div>
                    <h3 className="text-base font-medium">{site}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Brand Design – Webflow Development – Web Design
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center mt-1 transition-all duration-200 group-hover:bg-black group-hover:text-white cursor-pointer text-sm">
                    ↗
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-xl font-bold mb-10">Featured Works</h2>
          <div className="space-y-12 overflow-hidden">
            {/* Carousel Row 1 */}
            <div className="flex space-x-4 animate-carousel-right w-[200%] pl-6 pr-6">
              {[...Array(8)].map((_, i) => (
                <a key={i} href="https://example.com" target="_blank" rel="noopener noreferrer"
                  className="relative w-[240px] h-[140px] bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden group cursor-pointer transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={`/assets/images/project${i + 1}.png`}
                    alt={`Work ${i + 1}`}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                    <span className="text-white text-sm font-semibold">Visit site</span>
                  </div>
                </a>
              ))}
            </div>
            {/* Carousel Row 2 */}
            <div className="flex space-x-4 animate-carousel-left w-[200%] pl-6 pr-6">
              {[...Array(8)].map((_, i) => (
                <a key={i} href="https://example.com" target="_blank" rel="noopener noreferrer"
                  className="relative w-[240px] h-[140px] bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden group cursor-pointer transform transition-transform duration-300 hover:scale-105">
                  <img
                    src={`/assets/images/project${i + 1}.png`}
                    alt={`Work ${i + 9}`}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                    <span className="text-white text-sm font-semibold">Visit site</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f3f4f6] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-600 md:col-span-1">Testimonials</h2>
          <div className="md:col-span-2 flex flex-col gap-6">
            {[
              {
                name: "Ayush Raj",
                role: "VP of Marketing @ Webflow",
                img: "/assets/images/person3.png",
              },
              {
                name: "Alex Cattoni",
                role: "Founder @ CopyPossy",
                img: "/assets/images/person2.jpg",
              }
            ].map((testi, i) => (
              <div key={i} className="flex flex-col gap-2">
                <p className="text-gray-700 italic text-sm leading-relaxed">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
                <div className="flex items-center gap-3 mt-1">
                  <img src={testi.img} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm">{testi.name}</p>
                    <p className="text-xs text-gray-500">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
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
