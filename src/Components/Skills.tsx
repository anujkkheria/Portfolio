import React from "react";
import C from "../assets/icons8-c.svg";
import sql from "../assets/mysql-ar21.svg";
import java from "../assets/java-14.svg";
import Js from "../assets/javascript-1.svg";
import css from "../assets/css-29.svg";
import Html from "../assets/html-41.svg";
import node from "../assets/nodejs-4.svg";
import express from "../assets/express-js-icon.svg";
import react from "../assets/react.svg";
import mongo from "../assets/MongoDB_Logomark_ForestGreen/MongoDB_Logomark_ForestGreen.svg";
import material from "../assets/material-ui-2.svg";
import TypeScript from "../assets/typescript.svg";
import redux from "../assets/redux-action.svg";
import python from "../assets/python-5.svg";
import { Card } from "@mui/material";

const Skills: React.FC = () => {
  const skillsDetail = [
    {
      Category: "Programming Languages",
      Skills: [
        {
          name: "TypeScript",
          icon: TypeScript,
        },
        {
          name: "JavaScript",
          icon: Js,
        },
        {
          name: "Python",
          icon: python,
        },
        {
          name: "Java",
          icon: java,
        },
        {
          name: "C/C++",
          icon: C,
        },
      ],
    },
    {
      Category: "Frontend",
      Skills: [
        {
          name: "React",
          icon: react,
        },
        {
          name: "HTML",
          icon: Html,
        },
        {
          name: "CSS",
          icon: css,
        },
        {
          name: "Redux",
          icon: redux,
        },
        {
          name: "Material UI",
          icon: material,
        },
      ],
    },
    {
      Category: "Backend",
      Skills: [
        {
          name: "Expressjs",
          icon: express,
        },
        {
          name: "NodeJs",
          icon: node,
        },
      ],
    },
    {
      Category: "DataBase",
      Skills: [
        {
          name: "MongoDB",
          icon: mongo,
        },
        {
          name: "MySql",
          icon: sql,
        },
      ],
    },
  ];
  return (
    <div>
      <h1 className=" mt-28 mb-10 border-b-4 text-5xl w-28 mx-auto block border-b-blue-600">
        Skills
      </h1>
      <div className="flex justify-center flex-wrap gap-3">
        {skillsDetail.map((Skill) => {
          return (
            <Card
              key={Skill.Category}
              sx={{
                width: { xs: "25rem", sm: "35rem" },
                display: "flex",
                gap: 2,
                flexDirection: "column",
                alignItems: "center",
                mb: 2,
                height: "50%",
                p: 2,
                boxSizing: "border-box",
              }}
              elevation={3}
            >
              <h2 className=" m-5 mb-6 text-4xl border-b-4  border-b-blue-600">
                {Skill.Category}
              </h2>
              <div className=" flex mx-auto flex-col flex-grow-0 gap-10">
                {Skill.Skills.map((skill) => {
                  return (
                    <div key={skill.name} className="flex gap-5 items-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        width={"65rem"}
                        height={"65rem"}
                      />
                      <h3 className=" text-3xl">{skill.name}</h3>
                    </div>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
