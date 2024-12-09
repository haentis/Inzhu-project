import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeartIcon from '../assets/heartIcon.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const savedLikes = localStorage.getItem('likedItems');
    if (savedLikes) {
      const parsedLikes = JSON.parse(savedLikes);
      setLikedItems(Object.values(parsedLikes)); 
    }
  }, [isOpenCart]); 

  return (
    <header className="w-full h-16 flex items-center justify-between px-5 bg-white relative  shadow-xl">
      <p className="text-xl cursor-default font-bold">GlowCare</p>

      <button
        className="lg:hidden text-xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✖' : '☰'}
      </button>

      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:flex lg:gap-5 lg:items-center absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none`}
      >
        <Link to="/" className="block px-4 py-2 text-lg lg:px-0 lg:py-0" style={{userSelect: "none"}}>
          Басты бет
        </Link>
        <Link to="/blog" className="block px-4 py-2 text-lg lg:px-0 lg:py-0" style={{userSelect: "none"}}>
          Блог
        </Link>
        <Link to="/katalog" className="block px-4 py-2 text-lg lg:px-0 lg:py-0" style={{userSelect: "none"}}>
          Өнім карталары
        </Link>
        <Link to="/contact" className="block px-4 py-2 text-lg lg:px-0 lg:py-0" style={{userSelect: "none"}}>
          Контакты
        </Link>
        <button onClick={() => setIsOpenCart(!isOpenCart)} className="relative" style={{userSelect: "none"}}>
          <img src={HeartIcon} alt="Heart" className="w-6 h-6 pt-2" />
          <span className="text-xl absolute top-0 right-[-15px] bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[13px]">
            {likedItems.length}
          </span>
        </button>
      </nav>

      <div
          className={`${
            isOpenCart ? 'block' : 'hidden'
          } bg-white w-[35%] h-[500px] absolute right-0 top-16 flex flex-col z-30 items-center shadow-lg rounded-xl overflow-hidden transition-all duration-300`}
        >
          <p className="text-2xl font-semibold py-4 text-center w-full border-b border-gray-300">
            Таңдаулылар
          </p>
          <div className="w-[90%] h-auto bg-gray-50 p-4 overflow-auto flex flex-col gap-6">
            {likedItems.length > 0 ? (
              likedItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-row items-center p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200"
                >
                  <img src={item.img} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                  <div className="ml-4 flex flex-col">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-lg text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">Ештеңе таңдалмады.</p>
            )}
          </div>
      </div>
    </header>
  );
}

export default Header;
