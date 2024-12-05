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
    <header className="w-full h-16 flex items-center justify-between px-5 bg-white relative">
      <p className="text-xl">GlowCare</p>

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
        <Link to="/" className="block px-4 py-2 text-lg lg:px-0 lg:py-0">
          Басты бет
        </Link>
        <Link to="/blog" className="block px-4 py-2 text-lg lg:px-0 lg:py-0">
          Блог
        </Link>
        <Link to="/katalog" className="block px-4 py-2 text-lg lg:px-0 lg:py-0">
          Өнім карталары
        </Link>
        <Link to="/contact" className="block px-4 py-2 text-lg lg:px-0 lg:py-0">
          Контакты
        </Link>
        <Link to="/about" className="block px-4 py-2 text-lg lg:px-0 lg:py-0">
          Біз туралы
        </Link>
        <button onClick={() => setIsOpenCart(!isOpenCart)} className="relative">
          <img src={HeartIcon} alt="Heart" className="w-6 h-6 pt-2" />
          <span className="text-xl absolute top-0 right-[-15px] bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[15px]">
            {likedItems.length}
          </span>
        </button>
      </nav>

      <div
        className={`${
          isOpenCart ? 'block' : 'hidden'
        } bg-white w-[35%] h-[500px] absolute right-0 top-16 flex flex-col items-center shadow-2xl gap-5`}
      >
        <p className="text-xl">Таңдаулылар</p>
        <div className="w-[90%] h-auto bg-gray-100 p-4 overflow-auto">
          {likedItems.length > 0 ? (
            likedItems.map((item) => (
              <div key={item.id} className="p-4 border border-gray-300 mb-4">
                <img src={item.img} alt={item.title} className="w-full h-auto" />
                <h2 className="text-xl font-bold mt-2">{item.title}</h2>
                <p className="text-lg">{item.desc}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Ештеңе таңдалмады.</p>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
