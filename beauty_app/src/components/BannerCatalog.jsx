import bannerImage from '../assets/BannerImage.jpg';

function BannerCatalog() {
    return (
        <>
            <div className="relative w-full h-[600px] bg-cover bg-center" style={{ backgroundImage: `url('${bannerImage}')` }}>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center">
                    {/* Главный текст */}
                    <p className="text-6xl text-white text-center px-6 sm:text-7xl font-bold" style={{ userSelect: "none" }}>
                        Өнім карталары
                    </p>
                    {/* Дополнительный текст снизу */}
                    <p className="text-xl text-white mt-4 sm:text-2xl text-center px-6" style={{ userSelect: "none" }}>
                        Әр түрлі өнімдер мен ұсыныстарды табыңыз.
                    </p>
                </div>
            </div>
        </>
    );
}

export default BannerCatalog;
