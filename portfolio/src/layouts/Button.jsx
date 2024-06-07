import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Footer from "../components/Footer";

const Button = (props) => {
  return (
    <div>
      <a href="#footer">
        <button className="flex flex-row justify-center items-center gap-4 bg-brightColor hover:bg-black hover:text-white transition-all px-4 py-2 rounded-md cursor-pointer">
          {props.title}
          <BsArrowRight />
        </button>
      </a>
    </div>
  );
};

export default Button;
