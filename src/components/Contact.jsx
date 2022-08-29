import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Cotact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/0a812864-83e5-406d-b8c1-f72596bd01d6"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" type="submit">
              Let's talk
            </button>
          </form>
        </div>
        <div className="lg:hidden flex flex-row mg-4 p-4 justify-center max-w-screen-lg mx-auto h-full ">

          <button className="m-4"> <a href="https://www.linkedin.com/in/erickson-ruck-4339ab13a/"><FaLinkedin size={30} /></a></button>
          <button className="m-4"> <a href="https://github.com/Erickson98" ><FaGithub size={30} /></a></button>
          <button className="m-4"> <a href="mailto:erickson.ruck07@gmail.com"><HiOutlineMail size={30} /></a></button>
          <button className="m-4"> <a href="/resume.pdf" download={true}><BsFillPersonLinesFill size={30} /></a></button>

        </div>
      </div>
    </div>
  );
};

export default Contact;
