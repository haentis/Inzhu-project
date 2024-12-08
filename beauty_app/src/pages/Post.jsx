import { useParams } from "react-router";
import { useState } from "react";
import { posts } from "../post/Posts";
import Header from "../components/Header";

function Post() {
    const { id } = useParams();
    const post = posts.find((item) => item.id === parseInt(id));

    // Состояние для хранения видимости мифов
    const [visibleIndexes, setVisibleIndexes] = useState([]);

    // Функция для управления видимостью
    const toggleVisibility = (index) => {
        if (visibleIndexes.includes(index)) {
            setVisibleIndexes(visibleIndexes.filter((i) => i !== index));
        } else {
            setVisibleIndexes([...visibleIndexes, index]);
        }
    };

    if (!post) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <p className="text-3xl text-red-500">Пост не найден</p>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="w-[96%] mx-auto h-auto bg-white flex flex-col gap-5 p-5 shadow-md rounded-lg">
                <img
                    src={post.imagePost}
                    alt={post.title}
                    className="w-full h-[400px] object-cover rounded-lg mb-5"
                />
                <div className="flex flex-col gap-5">
                    <p className="text-4xl font-bold text-gray-800">{post.title}</p>
                    <p className="text-2xl text-gray-600 leading-relaxed">{post.textBlog}</p>
                </div>
                <div className="mt-5">
                    {post.full_text.map((item, index) => (
                        <div
                            key={index}
                            className="border-t border-gray-300 pt-5 mt-5"
                        >
                            {/* Заголовок мифа */}
                            <button
                                onClick={() => toggleVisibility(index)}
                                className="w-full text-left text-xl font-semibold text-gray-700 flex justify-between items-center focus:outline-none"
                            >
                                {item.myth}
                                <span className="text-gray-500">
                                    {visibleIndexes.includes(index) ? "▲" : "▼"}
                                </span>
                            </button>

                            {/* Скрытый контент факта */}
                            {visibleIndexes.includes(index) && (
                                <p className="text-lg text-gray-600 mt-2">
                                    {item.fact}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Post;
