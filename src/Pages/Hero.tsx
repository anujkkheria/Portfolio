import React from "react";
import anuj from "../assets/anuj.jpg";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import Blogs from "../Components/Blogs";
const Hero: React.FC = () => {
  const BlogsList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="w-full h-[90%] flex items-center justify-evenly ">
      {/* <nav className="w-full h-14 bg-black">Navbar</nav> */}
      <div className=" w-1/4 h-1/2 mx-auto shadow-xl border border-black bg-gradient-to-b from-30% from-blue-600 to-20% to-white flex flex-col justify-around items-center">
        <div className="mt-4">
          <img
            src={anuj}
            alt=""
            className=" w-40 h-40  border-2 bg-black border-emerald-600 rounded-full"
          />
        </div>
        <div className=" text-center">
          <h2>Anuj Kumar Kheria</h2>
          <h3>@AnujKheria</h3>
        </div>
        <div>
          <TagCloud
            options={(): TagCloudOptions => ({
              radius: 50,
              maxSpeed: "fast",
            })}
          >
            {["Python", "React", "Nodejs", "Java", "Mongo", "SQL", "Nextjs"]}
          </TagCloud>
        </div>
      </div>
      <section className="h-full w-1/2 flex items-center">
        <div className="w-full h-1/2 mr-10 shadow-xl border border-black flex flex-col">
          <div className="flex flex-row-reverse pr-10 py-2 my-2">
            <input
              type="text"
              placeholder="Search"
              className=" border-2 border-solid border-black rounded-3xl px-2 py-1 justify-self-end focus:border-cyan-600"
            />
          </div>
          <div className="Blogs flex flex-col max-h-1/2 overflow-y-scroll overflow-x-clip p-5 items-center justify-between">
            {BlogsList.map((blog) => {
              return <Blogs />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
