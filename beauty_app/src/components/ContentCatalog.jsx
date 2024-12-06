import { useState, useEffect, useCallback } from "react";
import { Tovari } from "../Tovari/tovari";
import whiteHeartIcon from '../assets/whiteHeartIcon.png';
import redHeartIcon from '../assets/redHeartIcon.png';
import { Link } from "react-router-dom";

function ContentCatalog() {
    const [likedItems, setLikedItems] = useState(() => {
        const savedLikes = localStorage.getItem('likedItems');
        return savedLikes ? JSON.parse(savedLikes) : {};
    });

    useEffect(() => {
        localStorage.setItem('likedItems', JSON.stringify(likedItems));
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

    return (
        <div className="w-full h-auto flex flex-row flex-wrap gap-14 justify-center">
            {Tovari.map((item) => (
                <div key={item.id} className=" block p-4 border border-gray-300 w-[27%] mt-40 flex flex-col gap-5  rounded-lg  hover:shadow-2xl ease-in-out duration-300">
                    <Link to={`/post/${item.id}`} className="flex flex-col gap-5">
                        <img src={item.img} alt={item.title} className="w-auto h-[300px]" style={{userSelect: "none"}} />
                        <h2 className="text-xl font-bold">{item.title}</h2>
                        <p className="text-xl">{item.desc}</p>
                    </Link>
                    <div
                        className="button_fav group w-[80%] h-[50px] bg-green-600 flex justify-center items-center text-xl text-white cursor-pointer rounded-lg gap-5 m-auto active:scale-95 transition-transform duration-150"
                        style={{ userSelect: "none" }}
                        onClick={(event) => {
                            event.stopPropagation(); // Предотвращает переход по ссылке
                            toggleLike(item.id, item); // Лайк
                        }}
                    >
                        таңдаулылар
                        <img
                            src={likedItems[item.id] ? redHeartIcon : whiteHeartIcon}
                            alt=""
                            className="w-5 h-5 mt-1"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ContentCatalog;
