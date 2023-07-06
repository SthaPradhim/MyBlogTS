import React from "react";
import { Blog } from "../Model/Blog";
interface Props {
  blog: Blog;
}

const BlogList: React.FC<Props> = ({ blog }) => {
  return (
    <>
      <div className="flex-row mt-4 w-3/4  mx-auto">
        <div className=" flex justify-between font-bold">
          <h1>{blog.title}</h1>
          <button className="bg-orange-300 px-4 rounded-lg">Edit</button>
        </div>
        <div className="flex">
          <h1>
            {blog.date.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </h1>
        </div>
        <div>
          <p>{blog.content}</p>
        </div>
      </div>
    </>
  );
};

export default BlogList;
