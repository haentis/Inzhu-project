import PostBlog from "./PostBlog";


function Blogs(){
    return(
        <>
            <div className="w-full h-auto flex flex-col items-center gap-20">
                <PostBlog/>
            </div>
        </>
    )
}

export default Blogs;