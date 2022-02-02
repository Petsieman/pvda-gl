import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection'
import Footer from '../components/Footer';
import image from '../images/home.jpg'



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar isOpen={isOpen} toggle={toggle}/>
      <HeroSection image={image} title={"PVDA-GL KRIMPENERWAARD"} big={true} />
      <NewsSection />
      <Footer />    
    </>
      
  );
};

export default Home;
