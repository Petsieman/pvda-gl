import React from 'react';
import balk from '../../images/balk.png'
import {Balk, StandpuntenContainer, Titel, PdfContainer} from './StandPuntenElementen'
import pdf from './programma.pdf'

const StandpuntenSection = () => {
  return (
    <StandpuntenContainer>
        <Titel>Verkiezingsprogramma</Titel>
        <Balk src={balk} alt='balk' className='balk'></Balk>
    </StandpuntenContainer>
  );
};

export default StandpuntenSection;
