import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          key={technology.name}
          className='w-28 h-28 flex items-center justify-center rounded-full border border-blue-500 relative'
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
            boxShadow: "0 0 15px 5px rgba(59, 130, 246, 0.5)", // Blue glow effect
          }}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className='w-12 h-12'
            style={{
              filter: "drop-shadow(0 0 3px white)", // Subtle white outline for icons
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
