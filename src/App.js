import React,{useEffect} from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import BannerSection from './pages/BannerSection';
import About from './pages/About';
import Footer from './components/Footer';
import Course from './pages/Course';
import Contacts from './pages/Contacts';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
   <>
   <Navbar/>
   <Home/>
   <BannerSection/>
   <About/>
   <Course/>
   <Contacts/>
   <Footer/>
   </>
  );
}

export default App;
