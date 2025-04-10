import React from "react";

function AboutMe() {
  return (
    <div className="mt-28 px-4 md:px-16 pt-28" id="about">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-blue-600 inline-block">
        About Me
      </h2>

      {/* About Text */}
      <div className="relative group bg-white shadow-lg rounded-xl p-6 border border-gray-200 transform transition duration-300 hover:scale-105">
         
         <img
    src="/dance.gif"
    alt="Dancing"
    className="absolute -top-12 right-4 w-16 h-16 hidden group-hover:block animate-bounce"
  />

      <p className="text-black-700 leading-relaxed text-lg mb-10">
        Hello! I’m <span className="font-semibold">Sparith Gowda</span>, a Frontend Developer with experience in{" "}
        <span className="font-semibold">
          ReactJS, JavaScript, HTML, CSS, TailwindCSS
        </span>
        , passionate about crafting user-friendly and aesthetically pleasing web applications. I have a strong foundation in web development principles and a keen eye for design, highly motivated to learn
        and adapt to new technologies, optimize performance, and deliver exceptional experiences. Looking for opportunities to contribute my skills and grow in a dynamic team environment.
      </p>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-b-2 border-blue-400 inline-block">
          Skills
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-gray-800 text-lg font-semibold list-disc list-inside">
          <li>React.js,TailwindCSS</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>REST APIs</li>
          
          <li>Java,Python</li>
          <li>Git & GitHub</li>
          <li>Data Analysis - Excel,Tableau</li>
          {/*<li>Web3Forms</li>
          <li>Razorpay Integration</li>*/}
        </ul>
      </div>

      {/* Education Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 border-b-2 border-blue-400 inline-block flex items-center gap-2">
  Education <span className="animate-bounce">🎓</span>
</h3>

        <div className="mt-4 text-lg text-bold-800">
          <p className="font-medium">Bachelor of Engineering - Computer Science</p>
          <p className="text-black-600">PES University - Electronic City - [2015 - 2019]</p>
          <p className="text-black-500 font-semibold">CGPA - 7.2</p>
          
        </div>
      </div>
    
      <div>
        
        <div className="mt-4 text-lg text-bold-800">
          <p className="font-medium">Pre-University - PCMB</p>
          <p className="text-black-600">St.Josephs PU College - [2017 - 2019]</p>
          <p className="text-black-500 font-semibold">Percentage - 89.4</p>
          
        </div>
      </div>

    





    </div>
  );
}

export default AboutMe;
