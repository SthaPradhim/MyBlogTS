import { useState } from "react";
import "./App.css";
import AddBlog from "./Components/AddBlog";
import { Blog } from "./Model/Blog";
import BlogList from "./Components/BlogList";

function App() {
  const [Blogs, setBlogs] = useState<Blog[]>([]);
  const [isFormShow, setIsFormShow] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-center bg-pink-500 p-3">
        <h1 className="text-[#82c95a] text-2xl font-extrabold">
          This is my Blog
        </h1>
      </div>
      <div className=" w-3/4 mx-auto mt-4 text-end">
        <button
          className="bg-slate-600 p-2 text-white rounded-lg w-48"
          onClick={() => setIsFormShow(true)}
        >
          Add Blog
        </button>
      </div>

      {isFormShow ? (
        <AddBlog
          isFormShow={isFormShow}
          setIsFormShow={setIsFormShow}
          Blogs={Blogs}
          setBlogs={setBlogs}
        />
      ) : null}
      {Blogs.map((blog) => (
        <BlogList blog={blog} key={blog.id} />
      ))}
    </>
  );
}

export default App;
