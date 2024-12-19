import { Link } from "react-router";
import { posts } from "../post/Posts";

function PostBlog() {
  return (
    <div className="w-full flex flex-col items-center bg-gray-50 py-10">
      {posts.map((item) => (
        <div
          key={item.id}
          className="w-[90%] max-w-4xl h-auto bg-white mt-10 flex flex-col md:flex-row border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
        >
          {/* Image Section */}
          <img
            src={item.imagePost}
            alt=""
            className="w-full md:w-1/3 h-64 md:h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          />
          
          {/* Content Section */}
          <div className="flex flex-col p-6 md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h2>
            <p className="text-lg text-gray-600 mb-6 line-clamp-3">{item.textBlog}</p>
            <Link
              to={`/post/${item.id}`}
              className="self-start px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Толығырақ оқу
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostBlog;
