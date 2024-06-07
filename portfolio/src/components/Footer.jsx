import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      id="footer"
      className="flex flex-row justify-between p-5 md:px-32 px-5 bg-black text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
    >
      <div className="flex gap-10">
        <a href="https://www.linkedin.com/in/pablo-jesus-a64433263/">
          <BsLinkedin
            size={32}
            className="hover:text-red-500 transition-all cursor-pointer"
          />
        </a>
        <a href="https://github.com/Pablo-jesuss">
          <BsGithub
            size={32}
            className="hover:text-red-500 transition-all cursor-pointer"
          />
        </a>
      </div>
      <div className="flex flex-row items-center cursor-pointer mt-5 lg:mt-0">
        <h1 className="text-3xl font-semibold">Pablo Henrique</h1>
      </div>
      <div className="flex flex-row items-center cursor-pointer mt-5 lg:mt-0">
        <h1 className="text-2xl font-semibold">Fone: (61) 9.9100-7229</h1>
      </div>
      <div className="flex flex-row items-center cursor-pointer mt-5 lg:mt-0">
        <h1 className="text-2xl font-semibold">
          E-mail: pablo.programador26@gmail.com
        </h1>
      </div>
    </div>
  );
};

export default Footer;
