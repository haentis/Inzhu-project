import { Link } from "react-router";
import logo from "../../public/girlmane.jpeg";

function Banner() {
  return (
    <div
      className="w-full h-[700px] bg-white relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "0.9",
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-75" />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Glowcare
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Табиғи күтім өнімдерімен жарқын теріге қол жеткізіңіз.
        </p>
        <Link to="/Quiz">
          <button className="rounded-lg w-52 h-14 bg-green-600 text-white text-xl font-semibold hover:bg-green-700 hover:scale-105 transition-transform duration-300">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
