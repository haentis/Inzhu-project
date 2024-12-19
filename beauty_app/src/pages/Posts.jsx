import { Link, useParams } from "react-router-dom";
import { Tovari } from "../Tovari/tovari";
import Header from "../components/Header";
import backIcon from '../../public/back.png';
import Footer from "../components/footer";

function Posts() {
    const { id } = useParams();
    const product = Tovari.find((item) => item.id === parseInt(id));

    return (
        <>
            <Header />
            <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center py-10">
                <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl">
                    <div className="flex items-center justify-between p-6 bg-gray-800 text-white rounded-t-lg">
                        <Link to={'/katalog'} className="flex items-center gap-2 text-xl hover:opacity-80">
                            <img src={backIcon} alt="Back" className="w-8 h-8 transform transition-transform hover:translate-x-[-16px] duration-300" />
                            <span>Каталогқа оралу</span>
                        </Link>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8 p-8">
                        <div className="w-full lg:w-1/2">
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full h-full object-cover rounded-lg shadow-lg transition-transform hover:scale-105 duration-500"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col justify-between">
                            <div>
                                <h1 className="text-4xl font-semibold text-gray-800">{product.title}</h1>
                                <p className="mt-4 text-lg text-gray-600">{product.brand}</p>
                            </div>
                            <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-xl">
                                <p className="text-xl text-gray-700">{product.full_desc ?? product.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Posts;
