import { useState, useEffect, useCallback } from "react";
import { Tovari } from "../Tovari/tovari";
import whiteHeartIcon from "../assets/whiteHeartIcon.png";
import redHeartIcon from "../assets/redHeartIcon.png";
import { Link } from "react-router-dom";

function ContentCatalog() {
  const [likedItems, setLikedItems] = useState(() => {
    const savedLikes = localStorage.getItem("likedItems");
    return savedLikes ? JSON.parse(savedLikes) : {};
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    localStorage.setItem("likedItems", JSON.stringify(likedItems));
  }, [likedItems]);

  const toggleLike = useCallback((id, item) => {
    setLikedItems((prev) => {
      const updatedLikes = { ...prev };
      if (updatedLikes[id]) {
        delete updatedLikes[id];
      } else {
        updatedLikes[id] = item;
      }
      return updatedLikes;
    });
  }, []);

  const showNotification = useCallback(() => {
    setIsVisible(true);
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      setTimeout(() => setIsVisible(false), 500);
    }, 1000);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10">
      {/* Сетка карточек */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-10">
        {Tovari.map((item) => (
          <div
            key={item.id}
            className="relative bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            {/* Изображение и ссылка */}
            <Link to={`/tovar/${item.id}`} className="block">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4 flex-1">
                <h2 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            </Link>

            {/* Кнопка "Избранное" */}
            <div
              className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={(event) => {
                event.stopPropagation();
                toggleLike(item.id, item);
                showNotification();
              }}
            >
              <img
                src={likedItems[item.id] ? redHeartIcon : whiteHeartIcon}
                alt="Like"
                className="w-6 h-6"
              />
            </div>

            {/* Кнопка "Добавить в избранное" */}
            <div className="p-4 mt-auto">
              <button
                className="w-full py-2 bg-green-600 text-white text-lg rounded-lg hover:bg-green-700 transition-colors duration-300"
                onClick={(event) => {
                  event.stopPropagation();
                  toggleLike(item.id, item);
                  showNotification();
                }}
              >
                Таңдаулыларға қосу
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Уведомление */}
      <div
        className={`fixed right-5 bottom-5 w-64 h-14 bg-green-600 text-white rounded-lg flex items-center justify-center shadow-lg transition-transform duration-500 ${
          isVisible
            ? isAnimating
              ? "translate-y-0"
              : "translate-y-20"
            : "translate-y-20 hidden"
        }`}
      >
        <p>Таңдаулыларға қосылды!</p>
      </div>
    </div>
  );
}

export default ContentCatalog;
