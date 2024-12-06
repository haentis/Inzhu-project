import bannerImage from '../assets/BannerImage.jpg';

function BannerCatalog(){
    return(
        <>
            <div className="w-full h-[600px] bg-cover bg-center flex items-center" style={{backgroundImage:`url('${bannerImage}')`}}>
                <div className='w-full h-[600px] bg-custom3 flex justify-center flex-col'>
                     <p className='text-7xl pl-48 text-white' style={{userSelect: "none"}}>Өнім карталары</p>
                     <p className='text-xl pl-48 pt-5 text-white' style={{userSelect: "none"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     </p>
                </div>
            </div>
        </>
    )
}

export default BannerCatalog;