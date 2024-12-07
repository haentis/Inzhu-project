import { useParams } from "react-router";
import { posts } from "../post/Posts";
import Header from "../components/Header";


function Post(){
    const {id} = useParams();
    const post = posts.find((item) => item.id === parseInt(id));
    return(
        <>
        <Header/>
          <div className="w-full h-[700px] flex justify-center items-center">
            <div className="w-[96%] h-[600px] bg-white flex flex-row gap-5">
                <img src={post.imagePost} alt="" className="w-[40%]"/>
                <div className="flex flex-col gap-5">
                    <p className="text-4xl pt-8">{post.title}</p>
                    <p className="text-2xl">{post.textBlog}</p>
                </div>
            </div>
            
          </div>
        </>
    )
}


export default Post;