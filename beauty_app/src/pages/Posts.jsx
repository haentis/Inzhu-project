import { Link, useParams } from "react-router";
import { Tovari } from "../Tovari/tovari";
import Header from "../components/Header";
import backIcon from '../../public/back.png';


function Posts(){
    const {id} = useParams();
    const product = Tovari.find((item) => item.id === parseInt(id));
    return(
        <>
          <Header/>
          <div className="w-full h-[700px] flex  items-center justify-center">
            <Link to={'/katalog'} className="text-3xl"><img src={backIcon} alt="" className="hover:translate-x-[-16px] ease-in-out duration-300" /></Link>
             <div className="w-[90%] h-[600px] bg-white flex  flex-row gap-8">
                <img src={product.img} alt="" className="w-[40%] shadow-2xl rounded-lg"/>
                <div className="flex flex-col gap-20">
                    <p className="text-5xl cursor-default">{product.title}</p>
                    <div className="w-60% bg-custom8  shadow-xl rounded-2xl">
                        <p className="text-2xl p-5 cursor-default">{product.full_desc ?? product.desc}</p>
                    </div>
                    <p className="text-2xl cursor-default">Бренд:{product.brand}</p>
                </div>
                
             </div>
          </div>
        </>
    )
}


export default Posts;