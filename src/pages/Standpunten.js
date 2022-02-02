import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import StandpuntenSection from '../components/StandpuntenSection.js';
import image from "../images/standpunten.jpeg"



const Standpunten = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar isOpen={isOpen} toggle={toggle}/>
      <HeroSection image={image} title={"Standpunten"} big={false}/>
      <StandpuntenSection/>
      <Footer/>
    </>
  );
};

export default Standpunten;