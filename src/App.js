import './App.css';
import TopHeader from './Components/Header/TopHeader'
import BottomHeader from './Components/Header/BottomHeader'
import CenteredNavbar from './Components/Header/Navibar'
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productsdeta from './Components/ProductPage/Productsdeta';
import Home from './pages/home';
import Footer from './Components/Footer/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AboutUs from './Components/AboutUs/AboutUs'



function App() {
  return (
    <div className="App">
    <Router>
      <TopHeader/>
      <BottomHeader/>
      <CenteredNavbar/>
      
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/Products" element={<Productsdeta />} />
           <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
      <Footer/>
    </div> 
  );
}

export default App;
