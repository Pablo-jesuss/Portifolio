import React from "react";
import img1 from "../assets/certificate/img01.png";
import img2 from "../assets/certificate/img02.png";
import img4 from "../assets/certificate/img4.png";

const Certificates = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="text-center font-semibold text-5xl pt-24 lg:pt-16 pb-8 lg:mb-4 text-red-600">
        Certificates
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0">
        <div className="w-full lg:w-1/4">
          <img
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img2}
            alt=""
          />
        </div>

        <div className="w-full lg:w-1/4">
          <img
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img1}
            alt=""
          />
        </div>

        <div className="w-full lg:w-1/4">
          <img
            className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
            src={img4}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
