import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      id="footer"
      className="flex flex-col lg:flex-row justify-between p-5 md:px-32 px-5 bg-black text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
    >
      {/* Redes Sociais */}
      <div className="flex justify-center lg:justify-start gap-10 lg:mt-0 mb-5 lg:mb-0">
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

      <div className="flex justify-center lg:justify-start mb-5 lg:mb-0">
        <h1 className="text-xl lg:text-3xl font-semibold">Pablo Henrique</h1>
      </div>

      <div className="flex flex-col justify-center lg:flex-row items-center gap-5">
        <h1 className="text-base lg:text-2xl font-semibold">
          Fone: (61) 9.9100-7229
        </h1>
        <h1 className="text-base lg:text-2xl font-semibold">
          E-mail: pablo.programador26@gmail.com
        </h1>
      </div>
    </div>
  );
};

export default Footer;
