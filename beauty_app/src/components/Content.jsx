import firstImage from "../assets/first.png";
import secondImage from "../assets/second.png";
import thirdImage from "../assets/third.png";
import fourthimage from "../assets/fourth.png";
import { Link } from "react-router";




function Content() {
    return (
        <>
            <div className="w-full h-[1600px]  flex items-center justify-center">
                <Link  to='/katalog' className="w-9/12 h-[1340px] mt-56 flex flex-wrap gap-10 justify-center items-center">
                    <div className="w-[45%] h-[650px] bg-cover bg-center brightness-75 hover:brightness-100  ease-in-out duration-300 relative z-0" style={{ backgroundImage: `url(${firstImage})`}}>
                    <div className="w-full h-full bg-customBlue flex flex-col relative">
                    </div>
                    </div>
                    <div className="w-[45%] h-[650px] bg-cover bg-center brightness-75 hover:brightness-100  ease-in-out duration-300" style={{ backgroundImage: `url(${secondImage})`}}>
                        <div className="w-full h-full bg-customBlue"></div>
                    </div>
                    <div className="w-[45%] h-[650px] bg-cover bg-center brightness-75 hover:brightness-100  ease-in-out duration-300" style={{ backgroundImage: `url(${thirdImage})`}}>
                        <div className="w-full h-full bg-customBlue"></div>
                    </div>
                    <div className="w-[45%] h-[650px] bg-cover bg-center brightness-75 hover:brightness-100  ease-in-out duration-300" style={{ backgroundImage: `url(${fourthimage})`}}>
                        <div className="w-full h-full bg-customBlue"></div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Content;
