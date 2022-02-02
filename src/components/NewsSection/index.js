import React from 'react';
import './NewsElements.css';
import CardItem from './NewsItem';
import img1 from '../../images/img-1.jpeg'
import img2 from '../../images/img-2.jpeg'
import img3 from '../../images/img-3.jpeg'
import balk from '../../images/balk.png'

const NewsSection = () => {
  return (
    
    <div className='cards' id={'nieuws'}>
      <h1>Nieuws</h1>
      <img src={balk} alt='balk' className='balk'></img>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img1}
              text='PvdA-GroenLinks presenteert verkiezingsprogramma: ‘Sociaal & Groen’'
              label='Mystery'
              path='/nieuws-1'
              subtext='Onder het motto ‘Bouwen aan een sociale en groene toekomst’ wil PvdA-GroenLinks laten zien hoe het anders kan.'
              datum='28 jan 2022'
            />
            <CardItem
              src={img3}
              text='Sandro Kovacic lijsttrekker PvdA-GroenLinks'
              label='Adventure'
              path='/nieuws-2'
              subtext='De leden van PvdA en GroenLinks Krimpenerwaard hebben tijdens de onlangs gehouden gezamenlijke ledenvergadering unaniem Sandro Kovacic benoemd tot lijsttrekker van die partijen voor de komende gemeenteraadverkiezingen.
              
              '
              datum='17 dec 2021'
            />
            <CardItem
              src={img2}
              text='Samenwerking PvdA en GroenLinks in Krimpenerwaard een feit'
              label='Adrenaline'
              path='/nieuws-3'
              subtext='In maart zullen de PvdA en GroenLinks gezamenlijk de gemeenteraadsverkiezingen ingaan als PvdA-GroenLinks. Met deze samenwerking willen de partijen ‘een krachtig sociaal en groen geluid’ laten horen in de lokale politiek.'
              datum='22 nov 2021'
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;



