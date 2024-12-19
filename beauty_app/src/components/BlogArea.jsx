import { Link } from "react-router";
import { posts } from "../post/Posts";

function BlogArea() {
  return (
    <div className="w-full py-10 flex justify-center items-center bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {posts.slice(0, 3).map((item) => (
          <div
            key={item.id}
            className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.imagePost}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-5 flex flex-col justify-between h-full">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h2>
              {/* <p className="text-gray-600 text-sm line-clamp-3">
                {item.description || "No description available"}
              </p> */}
              <Link
                to={`/post/${item.id}`}
                className="mt-4 bg-blue-500 text-white py-2 px-4 text-center rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                Толығырақ оқу
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogArea;
