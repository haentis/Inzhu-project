import { useState, useEffect } from "react";
import { Tovari } from "../Tovari/tovari";
import whiteHeartIcon from '../assets/whiteHeartIcon.png';
import redHeartIcon from '../assets/redHeartIcon.png';

function ContentCatalog() {
    const [likedItems, setLikedItems] = useState(() => {
        const savedLikes = localStorage.getItem('likedItems');
        return savedLikes ? JSON.parse(savedLikes) : {};
    });

    useEffect(() => {
        localStorage.setItem('likedItems', JSON.stringify(likedItems));
    }, [likedItems]);

    const toggleLike = (id, item) => {
        setLikedItems((prev) => {
            const updatedLikes = { ...prev };
            if (updatedLikes[id]) {
                delete updatedLikes[id];
            } else {
                updatedLikes[id] = item;
            }
            return updatedLikes; // Возвращаем обновлённое состояние
        });
    };

    return (
        <div className="w-full h-auto flex flex-row flex-wrap gap-14 justify-center">
            {Tovari.map((item) => (
                <div key={item.id} className="p-4 border border-gray-300 w-[27%] mt-40 flex flex-col gap-5">
                    <img src={item.img} alt={item.title} />
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-xl">{item.desc}</p>
                    <div
                        className="button_fav group w-[80%] h-[50px] bg-green-600 flex justify-center items-center text-xl text-white cursor-pointer gap-5 m-auto"
                        style={{ userSelect: "none" }}
                        onClick={() => toggleLike(item.id, item)}
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
