import React from 'react';
import { HeroContainer, HeroBg, ImgBg, HeroContent, HeroH1 } from './HeroElements';

const HeroSection = ({image, title, big}) => {
  return(
    <HeroContainer big={big}>
        <HeroBg>
            <ImgBg src={image} />
        </HeroBg>
        <HeroContent>
            <HeroH1>
              {title}
            </HeroH1>            
        </HeroContent>
    </HeroContainer>
  ); 
};

export default HeroSection;
