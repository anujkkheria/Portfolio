import React from "react";
import anuj from "../assets/anuj.jpg";
const Hero: React.FC = () => {
  return (
    <div className="hero container flex flex-col gap-4 content-center items-center justify-center min-w-full h-[100%]">
      <div className="img-container w-60 h-60 rounded-full relative flex justify-center items-center ">
        <div className="absolute w-60 h-60 top-16">
          <img
            src={anuj}
            alt="anuj"
            className="w-full h-full z-10 p-4 rounded-full"
          />
        </div>
      </div>
      <h1 className="gradient-text Welcome mt-10 sm:mt-0">Welcome</h1>
      <p className=" ml-[50%] font-bold text-xs sm:text-xl">
        I am Anuj Kumar Kheria, I am a Web developer, designer. I have a dream a
        dream to change enhance and develop ways how we preceive the world
        around us
      </p>
    </div>
  );
};

export default Hero;
