import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = (props) => {
  return (
    <div>
      <a href="#footer">
        <button className="flex text-white flex-row justify-center items-center gap-4 bg-brightColor hover:bg-white hover:text-black transition-all px-4 py-2 rounded-md cursor-pointer font-semibold">
          {props.title}
          <BsArrowRight />
        </button>
      </a>
    </div>
  );
};

export default Button;
