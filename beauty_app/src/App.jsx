import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
// import AboutUs from './pages/AboutUs';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
// import FullTovar from './pages/FullTovar';
// import { Tovari } from './Tovari/tovari';
import Quiz from './pages/Quiz';
import Posts from './pages/Posts';
import Post from './pages/Post';

function App() {


  return (
    <>
         <Router>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Katalog" element={<Catalog />} />
              <Route path="/Contact" element={<Contact />} />
              {/* <Route path="/About" element={<AboutUs />} /> */}
              <Route path="/Quiz" element={<Quiz />} />
              <Route path={`tovar/:id`} element={<Posts />} />
              <Route path={`post/:id`} element={<Post />} />
            </Routes>
         </Router>
    </>
  )
}

export default App
