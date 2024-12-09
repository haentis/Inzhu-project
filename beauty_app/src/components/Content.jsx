import firstImage from "../assets/dalbaMainpage.jpg";
import secondImage from "../../public/tocobo.jpg";
import thirdImage from "../../public/clarins.jpg";
import fourthImage from "../../public/theact.jpg";
import { Link } from "react-router";

function Content() {
  return (
    <div className="w-full py-20 bg-gray-100 flex justify-center">
      <Link
        to="/katalog"
        className="w-11/12 max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
      >
        {[firstImage, secondImage, thirdImage, fourthImage].map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[400px] sm:h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-[1.02] transition duration-300"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 hover:bg-opacity-10 transition duration-300" />
          </div>
        ))}
      </Link>
    </div>
  );
}

export default Content;
