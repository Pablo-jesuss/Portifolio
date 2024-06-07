import React from "react";

const EducationCard = (props) => {
  return (
    <div className="py-4">
      <div className="flex flex-col items-center lg:items-stretch">
        <div className="mb-4 text-center lg:text-left">
          <h2 className="font-semibold">{props.title}</h2>
          <div className="mt-2">
            <p>{props.state}</p>
            <p>{props.duration}</p>
          </div>
        </div>
        <div className="mb-4 text-center lg:text-left">
          <h2 className="font-semibold">{props.certificate}</h2>
          <p className="mt-2">{props.description}</p>
          <div className="bg-slate-500 w-full h-0.5 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
