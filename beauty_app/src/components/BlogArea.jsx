import firstBlogImage from "../assets/Blogfirst.png"; 

function BlogArea(){
    return(
        <>
            <div className="w-full  h-[600px]  flex justify-center items-center">
                <div className="w-4/5 h-[500px]  flex flex-row items-center gap-16">
                    <div className="w-[30%] h-[500px]  flex flex-col gap-3">
                        <img src={firstBlogImage} alt="" />
                        <p className="cursor-default">Marketing</p>
                        <p className="text-2xl cursor-default">
                            Why Figma works best for <br />
                            modern teams
                        </p>
                        <div className="w-[30%] h-[30px] mt-5 cursor-pointer">Learn more</div>
                    </div>
                    <div className="w-[30%] h-[500px]  flex flex-col gap-3">
                        <img src={firstBlogImage} alt="" />
                        <p className="cursor-default">Marketing</p>
                        <p className="text-2xl cursor-default">
                            Why Figma works best for <br />
                            modern teams
                        </p>
                        <div className="w-[30%] h-[30px] mt-5 cursor-pointer">Learn more</div>
                    </div><div className="w-[30%] h-[500px]  flex flex-col gap-3">
                        <img src={firstBlogImage} alt="" />
                        <p className="cursor-default">Marketing</p>
                        <p className="text-2xl cursor-default">
                            Why Figma works best for <br />
                            modern teams
                        </p>
                        <div className="w-[30%] h-[30px] mt-5 cursor-pointer">Learn more</div>
                    </div>
                </div>
                
                
            </div>
        </>
    )
}


export default BlogArea;