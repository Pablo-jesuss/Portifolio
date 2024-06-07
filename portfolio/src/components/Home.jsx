import React from "react";
import img from "../assets/img/img.png";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor">
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1 className=" text-6xl font-semibold leading-tight mt-24">
          Pablo Henrique
          <span className=" text-brightColor"> Front-end </span>
          Developer
        </h1>
        <p className="font-semibold">
          Sou apaixonado por programação, buscando constantemente desafios que
          me permitam crescer profissionalmente. Compreendo a importância do
          aprendizado contínuo em um ambiente tecnológico em constante evolução.
          Estou entusiasmado com a oportunidade de contribuir para projetos
          desafiadores e dinâmicos.
        </p>
        <Button title="CONTRATE-ME" />
      </div>
      <div className=" mt-20">
        <img width={600} src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
