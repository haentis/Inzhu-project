import CarImage from '../assets/Car.png';

function PostBlog(){
    return(
        <>
            <div className="w-[90%] h-[400px] bg-white mt-36 flex flex-row border-solid border-2 border-gray-600">
                <img src={CarImage} alt="" />
                <div className=''>
                    <p className='text-2xl p-4'>A Review of Cars with Advanced Infotainment Systems</p>
                    <p className='text-xl p-5'>
                        Lorem ipsum dolor sit amet consectetur. Consectetur risus quis diam hendrerit <br />
                        Interdum mattis in sed diam egestas metus at duis commodo. Cursus <br />
                        quis cursus dignissim egestas sollicitudin tristique quis. Orcineque quis porttitor eu amet. <br />
                        ommodo. Cursus quis cursus dignissim egestas sollicitudin tristique quis. Orci  <br />
                        neque quis porttitor eu amet.
                    </p>
                    <div className='w-[25%] h-[50px] bg-blue-500 flex justify-center items-center text-xl mt-20 ml-5 hover:bg-blue-800 ease-in-out duration-300 cursor-pointer'>Read full</div>
                </div>
            </div>
        </>
    )
}


export default PostBlog;