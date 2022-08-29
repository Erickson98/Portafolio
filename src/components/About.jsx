import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a front-end developer located in Dominican Republic.
          I love to create simple yet beautiful websites with great user experience.
          I'm interested in learning new things every day in the world of software.
        </p>

        <br />

        <p className="text-xl">
          I am also interested in the world of algorithms and data structures,
          to build and be aware of each algorithm that I implement in a system.
          Other interests are in the field of AI and the mathematics it uses.
        </p>
      </div>
    </div>
  );
};

export default About;
