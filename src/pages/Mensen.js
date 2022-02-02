import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import NewsSection from '../components/NewsSection'
import Footer from '../components/Footer';
import image from '../images/mensen.png'
import CandidateSection from '../components/CandidateSection';



const Mensen = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar isOpen={isOpen} toggle={toggle}/>
      <HeroSection image={image} title={"Onze Mensen"} big={false}/>
      <CandidateSection/>
      <Footer/>
    </>
  );
};

export default Mensen;
