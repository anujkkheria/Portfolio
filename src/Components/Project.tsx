import React from "react";
import { Card, CardMedia } from "@mui/material";
import software from "../assets/pexels-markus-spiske-965345.jpg";
const Project: React.FC = () => {
  return (
    <div className="m-20">
      <h1 className=" text-5xl text-center m-25">Projects</h1>
      <div className="flex flex-wrap gap-1 justify-evenly">
        <Card sx={{ width: "25%", textAlign: "center", m: 4 }}>
          <CardMedia
            component="img"
            image={software}
            sx={{ borderRadius: 1, p: 1 }}
          />
          <h3 className="text-blue-600 font-bold text-2xl p-2">Software</h3>
        </Card>
        <Card sx={{ width: "25%", textAlign: "center", m: 4 }}>
          <CardMedia
            component="img"
            image={software}
            sx={{ borderRadius: 1, p: 1 }}
          />
          <h3 className="text-blue-600 font-bold text-2xl p-2">Software</h3>
        </Card>
      </div>
    </div>
  );
};

export default Project;
