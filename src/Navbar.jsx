import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-gray-900/60 backdrop-blur-md shadow-md" : "bg-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-3 md:py-2">
          <h1 className="text-xl md:text-2xl font-bold text-cyan-50 cursor-default">
            Ketan <span className="text-blue-500">Decorators</span>
          </h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 text-sm md:text-base text-white">
            {[
              { name: "Home", link: "#home" },
              { name: "About", link: "#about" },
              { name: "Services", link: "#services" },
              { name: "Contact", link: "#contact" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="cursor-pointer hover:border-b-2 border-blue-500 p-2 transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <div className="md:hidden text-white">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-blue-950/80 backdrop-blur-md z-40 flex flex-col justify-center items-center gap-8 text-white text-lg">
          {[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            { name: "Services", link: "#services" },
            { name: "Contact", link: "#contact" },
          ].map((item) => (
            <li
              key={item.name}
              className="list-none font-medium cursor-pointer hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </div>
      )}

      <div className="h-[56px] md:h-[56px]" />
    </>
  );
};

export default Navbar;
