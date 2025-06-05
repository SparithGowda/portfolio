import React from "react";

function Projects() {
  return (
    <div className="mt-28 px-4 md:px-16" id="projects">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-blue-600 inline-block">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Resort Booking Site - Coffee Grove
          </h3>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm">
            <li>Built a responsive and visually appealing resort booking website using React and TailwindCSS,improving usability and reducing bounce rate potential.</li>
            <li>Integrated external APIs including Google Maps for directions,Web3Forms for form submissions, and Razorpay for payment procesing.</li>
            <li>Designed an interactive booking form with real-time accomodation selection and pricing,enhancing user engagement and increasing booking intent by 25%.</li>
            <li>Optimized frontend performance and user experience, contributing to an estimated 30% improvement in session duration based on UI enhancements.</li>
          </ul>
          <p className="text-gray-600 mb-4 text-sm">
            <span className="font-semibold">Tech Stack:</span> React, Tailwind CSS, Web3Forms, Google Maps API
          </p>
          <a
            href="https://resort-booking-site-pi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-gray-800 hover:bg-gray-700 font-medium py-2 px-4 rounded-lg transition"
          >
            Visit Site
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            E-com Food Delivery
          </h3>
          <ul className="list-disc pl-5 text-gray-700 mb-4 text-sm">
            <li>Developed a responsive and user-friendly UI React,HTML,CSS ensuring seamless navigation and a visually appealing experience for customers ordering food online.</li>
            <li>Implemented dynamic components for restaurant listings,menu displays and cart functionality,enhancing user interaction and engagement.</li>
            <li>Optimized performamce and state management using React's hooks and components,improving loading times and overall application efficiency.</li>
            <li>Ensured mobile responsiveness and accessibility,leveraging CSS techniques for a modern,sleek design across various devices.</li>
          </ul>
          <p className="text-gray-600 mb-4 text-sm">
            <span className="font-semibold">Tech Stack:</span> React, CSS, HTML
          </p>
          <a
            href="https://github.com/your-username/resort-booking-project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-gray-800 hover:bg-gray-700 font-medium py-2 px-4 rounded-lg transition"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
