import React, { useState } from "react";
import { Blog } from "../Model/Blog";

interface Props {
  isFormShow: boolean;
  setIsFormShow: React.Dispatch<React.SetStateAction<boolean>>;
  Blogs: Blog[];
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>;
}
const AddBlog: React.FC<Props> = ({
  isFormShow,
  setIsFormShow,
  Blogs,
  setBlogs,
}) => {
  const [date, setDate] = useState<Date>(new Date());
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handelBlogAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (Blogs) {
      setBlogs([
        ...Blogs,
        { id: Date.now(), title: title, content: content, date: date },
      ]);
      setContent("");
      setTitle("");
    }
  };
  console.log(Blogs);
  return (
    <div className="mt-2">
      <form
        action=""
        className="flex flex-col w-2/4 mx-auto gap-4"
        onSubmit={handelBlogAdd}
      >
        <input
          onChange={(e) => setDate(new Date(e.target.value))}
          type="datetime-local"
          className="rounded-lg p-2 border-2 border-black "
        />

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="rounded-lg p-2 border-2 border-black "
          placeholder="Enter Title"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="Content"
          className="rounded-lg p-2 border-2 border-black "
          placeholder="Content"
        />
        <div className="flex justify-end gap-2 mt-4">
          <button
            className="p-2 bg-red-500 rounded-lg w-48"
            onClick={() => setIsFormShow(false)}
          >
            Cancel
          </button>

          <button type="submit" className="p-2 bg-red-500 rounded-lg w-48">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
