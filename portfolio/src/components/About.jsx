import React from "react";
import SkillCard from "../layouts/SkillCard";

const About = () => {
  const skill1 = "w-11/12";
  const skill2 = "w-10/12";
  const skill3 = "w-4/5";
  const skill4 = "w-4/6";
  const skill5 = "w-2/5";

  return (
    <div className=" min-h-screen flex flex-col justify-around lg:gap-8 lg:px-32 px-5 bg-backgroundColor">
      <div className=" mt-16">
        <h1 className=" text-5xl font-semibold text-center lg:mt-2 text-red-600">
          About Me
        </h1>
      </div>

      <div className=" -mt-10">
        <div className=" mb-10">
          <h2 className=" text-3xl font-semibold">Pablo Henrique</h2>
          <p className=" mt-4 lg:mt-2 font-semibold">
            Sou um desenvolvedor front-end apaixonado, com experiência em criar
            interfaces de usuário atraentes e funcionais. Minhas habilidades
            incluem:
          </p>
        </div>

        <div>
          <h2 className=" text-3xl font-semibold text-red-600 ">My Skills</h2>

          <div>
            <SkillCard title="Html" width={skill1} val="90%" />
            <SkillCard title="CSS (Sass/SCSS)" width={skill1} val="90%" />
            <SkillCard title="JavaScript" width={skill2} val="85%" />
            <SkillCard title="TypeScript" width={skill3} val="80%" />
            <SkillCard title="React JS" width={skill3} val="80%" />
            <SkillCard title="Git & GitHub" width={skill4} val="70%" />
            <SkillCard title="Angular" width={skill5} val="40%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
