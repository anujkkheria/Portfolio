//Imports
import React from "react";
import { motion } from "framer-motion";
// Assets
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

const Skills: React.FC = () => {
  const skillsDetail = [
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
    <motion.div className="p-5">
      {skillsDetail.map((Skill, i) => {
        return (
          <motion.div
            className=""
            initial={{ opacity: 0, translateY: 100 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: i * 0.5 }}
          >
            <div className="heading flex flex-col justify-center items-center">
              <h2 className=" text-3xl text-center p-2">{Skill.Category}</h2>
              <span className="border-2 border-solid border-blue-600 w-1/4 block"></span>
            </div>
            <div className="flex justify-center gap-2 p-10">
              {Skill.Skills.map((skill, i) => {
                return (
                  <motion.div
                    className=" flex flex-col p-10 justify-center items-center w-64 h-1/4 shadow-xl"
                    initial={{ opacity: 0, translateY: 100 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1, delay: i * 0.5 }}
                  >
                    <img src={skill.icon} alt="" className="w-20 h-16" />
                    <h3 className="">{skill.name}</h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Skills;
