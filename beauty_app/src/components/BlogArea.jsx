// import firstBlogImage from "../assets/Blogfirst.png"; 
import { Link } from "react-router";
import { posts } from "../post/Posts";

function BlogArea(){

    return(
        <>
            <div className="w-full  h-[600px]  flex justify-center items-center">
                {posts.slice(0,3).map((item) => (
                    <div key={item.id} className="w-[80&] h-[500px]  flex flex-row items-center gap-16 hover:scale-[1.01] ease-in-out duration-300">
                    <div id="" className="w-[90%] h-[450px]  flex flex-col gap-3 ml-5 rounded-lg border-2  border-gray-500">
                        <img src={item.imagePost} alt="" />
                        <p className="cursor-default text-[17px] pl-5">{item.title}</p>
                        <Link to={`/post/${item.id}`} className="w-[30%] h-[30px] mt-5 cursor-pointer bg-blue-400 flex justify-center items-center rounded-md ml-4 hover:bg-blue-600 ease-in-out duration-200">Learn more</Link>
                    </div>
               </div>
                ))
                }
            </div>
        </>
    )


}


export default BlogArea;