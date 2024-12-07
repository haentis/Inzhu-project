import menImage from '../assets/reviewsImage.png';
import reviewsImage2 from '../assets/reviewsImages2.png';

function Reviews(){
    return(
        <>
            <div className="w-full h-[1000px]  flex justify-center items-center mt-16" style={{ userSelect: "none" }}>
                <div className="w-4/5 h-[500px] bg-white  flex flex-row gap-40">
                    <img src={menImage} alt=""  className=''/>
                    <div className='w-[500px] h-[500px] '>
                        <img src={reviewsImage2} alt="" />
                        <p className='text-3xl pt-11'>
                            Amet minim mollit non deserunt <br />
                            est sit aliqua dolor do amet sint <br />
                            officia consequat duis enim mollit <br />
                            exercitation.
                        </p>
                        <img src={reviewsImage2} alt="" className='pt-10' />
                        <p className='pt-14'>Lee Morgan, Slack, Inc</p>
                        <p className=''>New York, NY Team</p>
                    </div>
                </div>
               
            </div>
        </>
    )
}



export default Reviews;