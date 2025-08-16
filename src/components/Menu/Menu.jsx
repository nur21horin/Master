import React from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { title: "Que Card", image: "/Photo/qCard.webp", link: "/quecard" },
  { title: "Listening", image: "/Photo/listening.webp", link: "/listening" },
  { title: "Speaking", image: "/Photo/speaking.webp", link: "/speaking" },
  { title: "Reading", image: "/Photo/reading.jpg", link: "/reading" },
  { title: "Writing", image: "/Photo/writing.jpeg", link: "/writing" },
  { title: "Vocabulary", image: "/Photo/Vocabulary.jpg", link: "/vocabpage" }, // changed
];


const Menu = () => {
  return (
    <div className="py-10">
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              `relative w-[250px] h-[150px] rounded-lg overflow-hidden shadow-lg 
               transform transition duration-300 hover:scale-105 hover:shadow-2xl 
               ${isActive ? "ring-4 ring-blue-500" : ""}`
            }
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-2xl font-semibold drop-shadow-lg">
                {item.title}
              </span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Menu;
