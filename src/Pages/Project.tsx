import React, { useState } from "react";
import { motion } from "framer-motion";
import Tours from "../assets/Tours-sample.jpg";
import BDremainder from "../assets/BDremainder.jpg";
const Project: React.FC = () => {
  const Projects = [
    {
      name: "Tours",
      Catagory: "Front-End",
      img: Tours,
      desc: "",
      links: "https://sample-tours.netlify.app/",
      technologiesused: "",
    },
    {
      name: "Birthday-Remainder",
      Catagory: "Front-End",
      img: BDremainder,
      desc: "",
      link: "https://anuj-birthday-reminder.netlify.app/",
      technologiesused: "",
    },
  ];
  const [currProject, setCurrProject] = useState(Projects[0]);

  return (
    <div className="m-10 flex gap-2">
      <div>
        <div
          className="w-full
         h-1/2"
        >
          <img src={currProject.img} alt="" className="w-15 h-15" />
        </div>
      </div>
      <div className="w-full h-full">
        <motion.div
          className="w-full border border-y-2 border-y-black flex justify-around mb-4 py-3"
          initial={{ translateY: 100, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <span>sno</span>
          <span>preview</span>
          <span>name</span>
          <span>Catagory</span>
        </motion.div>
        {Projects.map((project, i) => {
          return (
            <motion.div
              className="w-full h-1/4 border border-y-2 border-y-black flex justify-around  items-center mb-4 py-3"
              initial={{ translateY: 100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.5 }}
              onClick={() => setCurrProject({ ...project })}
            >
              <span>{i + 1}</span>
              <span className="w-20 h-20 flex items-center">
                <img src={project.img} alt="" className="w-20 h-20" />
              </span>
              <span className="items-center w-20">{project.name}</span>
              <span>{project.Catagory}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
