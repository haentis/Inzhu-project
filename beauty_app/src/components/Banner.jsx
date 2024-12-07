import { Link } from "react-router";
import GirlImage from "../../public/girl.png";


function Banner(){



    return( 
        <>
            <div className="w-full h-[700px] flex flex-row justify-center items-center">
                <div className="w-2/5 h-[600px] flex flex-col justify-center cursor-default">
                    <p className="text-7xl" style={{ userSelect: "none" }}>
                    Glowcare - күтімнен<br />
                    басталатын <br />
                    жарқырау
                    </p>
                   <Link to={'/Quiz'}>
                        <div className="rounded-lg w-52 h-14 bg-green-900 mt-5 flex items-center justify-center hover:scale-95 bg-green-500 transition duration-300 cursor-pointer">
                            <p className="text-2xl text-white">Get started</p>
                        </div>
                    </Link> 
                </div>
                <div className="w-[600px] h-[600px] bg-custom2 flex justify-center items-center">
                    <img src={GirlImage} alt="Girl" className="w-[500px] h-[600px]" />
                </div>
            </div>
        </>
    )
}


export default Banner;