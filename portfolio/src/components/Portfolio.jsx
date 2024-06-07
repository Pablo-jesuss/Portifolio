import React from "react";
import img1 from "../assets/port/p01.png";

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="text-center font-semibold text-5xl pt-24 lg:pt-16 pb-8 lg:mb-4 text-red-600">
        Porfolio
      </h1>
      <div className="flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0">
        <div className="w-full lg:w-1/4">
          <a href="https://pablo-jesuss.github.io/Quiz/">
            <img
              className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
              src={img1}
              alt="1"
            />
            <p className=" mt-4 lg:mt-2 font-semibold flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0 hover:text-brightColor transition-all">
              Quiz com react
            </p>
          </a>
        </div>

        <div className="w-full lg:w-1/4">
          <a href="https://pablo-jesuss.github.io/Quiz/">
            <img
              className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
              src={img1}
              alt="1"
            />
            <p className=" mt-4 lg:mt-2 font-semibold flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0 hover:text-brightColor transition-all">
              test
            </p>
          </a>
        </div>

        <div className="w-full lg:w-1/4">
          <a href="https://pablo-jesuss.github.io/Quiz/">
            <img
              className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
              src={img1}
              alt="1"
            />
            <p className=" mt-4 lg:mt-2 font-semibold flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0 hover:text-brightColor transition-all">
              test
            </p>
          </a>
        </div>

        <div className="w-full lg:w-1/4">
          <a href="https://pablo-jesuss.github.io/Quiz/">
            <img
              className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
              src={img1}
              alt="1"
            />
            <p className=" mt-4 lg:mt-2 font-semibold flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0 hover:text-brightColor transition-all">
              test
            </p>
          </a>
        </div>

        <div className="w-full lg:w-1/4">
          <a href="https://pablo-jesuss.github.io/Quiz/">
            <img
              className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
              src={img1}
              alt="1"
            />
            <p className=" mt-4 lg:mt-2 font-semibold flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0 hover:text-brightColor transition-all">
              test
            </p>
          </a>
        </div>

        <div className="w-full lg:w-1/4">
          <a href="https://pablo-jesuss.github.io/Quiz/">
            <img
              className="transform transition-transform duration-300 hover:scale-110 rounded-md cursor-pointer"
              src={img1}
              alt="1"
            />
            <p className=" mt-4 lg:mt-2 font-semibold flex items-center justify-center flex-wrap gap-10 pb-5 lg:pb-0 hover:text-brightColor transition-all">
              test
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
