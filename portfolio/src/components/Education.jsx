import React from "react";
import EducationCard from "../layouts/EducationCard";

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className=" text-red-600 text-center font-semibold text-5xl mt-24 lg:mt-16 mb-8 lg:mb-7">
        Education
      </h1>

      <div className="bg-white p-5 rounded-md flex flex-col items-center lg:items-stretch font-semibold ">
        <EducationCard
          title="Faculdade"
          state="Formado"
          description="CENTRO UNIVERSITÁRIO ESTÁCIO"
          duration="Jun 2019 - Jun 2023"
          certificate="BACHAREL(A) EM CIÊNCIA DA COMPUTAÇÃO"
        />

        <EducationCard
          title="Curso"
          state="Concluído"
          certificate="Formação Front-end Udemy"
          description="HTML, CSS, JAVASCRIPT, REACT E TYPESCRIPT"
        />

        <EducationCard
          title="Curso"
          state="Cursando"
          certificate="Formação Full Stack Onebitcode"
          description="Full Stack"
        />
      </div>
    </div>
  );
};

export default Education;
