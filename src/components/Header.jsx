import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div
      className=" min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <NavBar />
      <div className="continer text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl pt-20 font-semibold">
          Explore home that fit your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a className="border border-white px-8 py-3 rounded" href="#Projects">
            Project
          </a>
          <a className="px-8 py-3 rounded bg-blue-500" href="#Contact">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
