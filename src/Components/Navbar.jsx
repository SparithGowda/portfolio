import React,{useState,useRef,useEffect} from "react";

import email from "../Assets/email.png";
import download from "../Assets/download.png";
import github from "../Assets/GIthub.png";

import linkedin from "../Assets/Linkedin.png";




function Navbar() {

          const [dropdownOpen, setDropdownOpen] = useState(false);
          const dropdownRef = useRef(null);

          useEffect(() => {
            function handleClickOutside(event) {
              if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
              }
            }
        
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
          }, []);


  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-1000 to-blue-1200 shadow-md fixed top-0 left-0 w-full z-20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">



        {/* Introduction */}
        <div>
        <div className="text-2xl font-bold text-black-600 tracking-tight">
          Sparith Gowda</div>
          <div className="text-sm font-bold text-black-500 -mt-1">Frontend Developer</div>
          <div className="text-sm font-semi-bold text-black-500 -mt-1">reach2sparith@gmail.com</div>
        </div>




        {/* Navigation Links */}
        <ul className="flex gap-6 text-gray-700 font-medium text-sm md:text-base">
          <li>
            <a href="#about" className="hover:text-blue-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500 transition">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>
          </li>
          <li className="relative group" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="hover:text-blue-500 transition"
          >
            Contact
          </button>

          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white hidden group-hover:block border border-gray-200 rounded-xl shadow-lg z-10">
              <li>
                <a
                  href="https://www.linkedin.com/in/sparithg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 hover:bg-gray-100 transition text-gray-800"
                >
                   <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-5 h-5"
                  />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SparithGowda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 hover:bg-gray-100 transition text-gray-800"
                >
                   <img
                    src={github}
                    alt="LinkedIn"
                    className="w-5 h-5"
                  />
                  GitHub
                </a>
              </li>
              <li>
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=reach2sparith@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center px-4 py-2 gap-2 hover:bg-gray-100 transition text-gray-800"
  >
    <img
      src={email}  // Make sure this icon exists in /public
      alt="Email"
      className="w-5 h-5"
    />
    Email
  </a>
</li>
</ul>
          )}
        </li>
        <li className="flex items-center gap-2">
          <a href="/FrontendSpa.pdf">
  <img src={download} alt="Download" className="w-7 h-7 hover:scale-150 transition cursor-pointer" />
  </a>
</li>

        </ul>
      </div>
    </nav>
  );

}

export default Navbar;
