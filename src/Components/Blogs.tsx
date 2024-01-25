import React from "react";
interface blog {
  blog: any;
}
const Blogs: React.FC<blog> = (blog) => {
  return (
    <div className="border border-black w-full h-full p-4 m-2 ">
      Blogs {`${blog}`}
    </div>
  );
};

export default Blogs;
