import React from 'react';
import './CandidateElements.css';
import CandidateItem from './CandidateItem';
import CandidatesItem from './CandidatesItem';
import sandro from '../../images/sandro.jpeg'
import bart from '../../images/bart.jpeg'
import cees from '../../images/cees.jpeg'
import balk from '../../images/balk.png'

const CandidateSection = () => {
  return (
    
    <div className='cands' id={'nieuws'}>
      <h1>Kandidatenlijst</h1>
      <img src={balk} alt='balk' className='balk'></img>
      <div className='cands__container'>
        <div className='cands__wrapper'>
          <ul className='cands__items'>
            <CandidateItem
              src={sandro}
              text='Sandro Kovacic'
              label='1'
              path='/nieuws-1'
            />
            <CandidateItem
              src={bart}
              text='Bart van Ree'
              label='2'
              path='/nieuws-2'
            />
            <CandidateItem
              src={cees}
              text='Cees van der Graaf'
              label='3'
              path='/nieuws-3'
            />
          </ul>
          <ul className='cands__items'>
            <CandidatesItem
              src={cees}
              subtext1='4. André van Tol'
              subtext2='5. Abdirahmaan Hassan'
              subtext3='6. Suzanne Dalman'
              subtext4='7. Franca Korevaar'
              subtext5='8. Aris Maat'
              path='/nieuws-1'
            />
         
          
            <CandidatesItem
              src={cees}
              subtext1='9. Sanne Koudijs'
              subtext2='10. Petter Reijalt'
              subtext3='11. Henk van der Wal'
              subtext4='12. Pieter van den Dool'
              subtext5='13. Jasper Schilt'
              path='/nieuws-3'
            />
         
          
            <CandidatesItem
              src={cees}
              subtext1='14. Jo Heuvelman'
              subtext2='15. Klaas Koopmans'
              subtext3='16. Adri Martens'
              subtext4=''
              subtext5=''
              path='/nieuws-3'
            />
          </ul>

        </div>
      </div>
    </div>
  );
};

export default CandidateSection;



