import { Link } from "react-router";
import { posts } from "../post/Posts";

function PostBlog(){



    return(
        <>
          {
            posts.map((item) => (
                <div key={item.id} className="w-[90%] h-[400px] bg-white mt-10 flex flex-row border-solid border-2 rounded-lg border-gray-500 shadow-md transition-transform transform hover:scale-[1.01] hover:shadow-2xl duration-300">
                    <img src={item.imagePost} alt="" />
                    <div className=''>
                        <p className='text-2xl p-4'>{item.title}</p>
                        <p className='text-xl p-5'>
                            {item.textBlog}
                        </p>
                        <Link className='w-[25%] h-[50px] bg-blue-500 flex justify-center items-center text-xl mt-20 ml-5 hover:bg-blue-800 ease-in-out duration-300 cursor-pointer rounded-lg' to={`/post/${item.id}`}>Read full</Link>
                    </div>
                </div>
            ))
          }
        </>
    )
}


export default PostBlog;