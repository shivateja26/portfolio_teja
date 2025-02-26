import React, { useState, useRef } from "react";

const Project = () => {
  const projects = [
    { title: "Portfolio", description: "Built with React, Vite, and Tailwind CSS, my portfolio features dynamic components, fast performance, and a responsive, modern design that adapts seamlessly across devices.", link: "https://github.com/shivateja26/portfolio_teja" },
    { title: "Authentication-Mern", description: "Features : Email Verificaion,Password Recovery,Verification Email,Forgotpassword,Login And logout",link:"https://github.com/shivateja26/Authentication_mern.git" },
    { title: "Weather App", description: "Weather App with React JS and OpenWeatherMap API .", link: "https://github.com/shivateja26/weather_app" },
    { title: "TodoList", description: "users can add, mark as complete, and delete tasks. It uses React's useState for state management and event handlers to update the task list dynamically.", link: "https://github.com/shivateja26/todolist" },
    { title: "Spendix", description: "Developed a secure personal finance app using the MERN stack with JWT authentication. Features include income/expense tracking, visual charts (Recharts), and data export to Excel. Implemented user-friendly cards for quick access and management, responsive design for all devices, and sidebar navigation for seamless UX.", link: "https://github.com/shivateja26/spendix" },
    
    { title: "Project", description: "A mobile app that enhances user engagement.", link: "#" },
    { title: "Project", description: "A platform to connect people in new ways.", link: "#" },
    { title: "Project", description: "A service that simplifies everyday tasks.", link: "#" },
    { title: "Project", description: "A highly customizable web app for different use cases.", link: "#" },
    { title: "Project", description: "An educational platform for modern learners.", link: "#" }
  ];

  const [isScrolling, setIsScrolling] = useState(true);
  const carouselRef = useRef(null);

  const handleMouseEnter = () => {
    setIsScrolling(false); // Stop the scroll when mouse enters a card
  };

  const handleMouseLeave = () => {
    setIsScrolling(true); // Resume scrolling when mouse leaves the card
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -250, // Adjust this value based on the card width
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 250, 
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="project" className="section py-20 bg-zinc-900">
      <div className="container relative">
        <h2 className="headline-2 text-center mb-12 text-white">My Projects</h2>

        {/* Scrollable Container */}
        <div
          ref={carouselRef}
          className={`flex overflow-x-auto space-x-8 pb-4 hide-scrollbar ${
            isScrolling ? "scrolling" : ""
          }`}
          style={{
            animation: isScrolling ? "scrollCards 20s linear infinite" : "none"
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[250px] bg-zinc-800 p-6 rounded-lg shadow-lg text-white hover:scale-105 transform transition-all duration-300"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <a href={project.link} className="text-sky-400 mt-4 inline-block items-center gap-2">
  Git Hub
  <span className="material-symbols-rounded">link</span>
</a>

            </div>
          ))}
        </div>

        {/* Left Arrow Button Outside the Scrollable Container */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-zinc-700 text-white p-2 rounded-full hover:bg-zinc-600 transition"
          onClick={scrollLeft}
        >
          <span className="material-symbols-rounded">arrow_left</span>
        </button>

        {/* Right Arrow Button Outside the Scrollable Container */}
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-zinc-700 text-white p-2 rounded-full hover:bg-zinc-600 transition"
          onClick={scrollRight}
        >
          <span className="material-symbols-rounded">arrow_right</span>
        </button>
      </div>
    </section>
  );
};

export default Project;
