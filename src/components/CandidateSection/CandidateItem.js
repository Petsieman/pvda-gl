import React from 'react';
import { Link } from 'react-router-dom';

function CandidateItem(props) {
  return (
    <>
      <li className='cands__item'>
        <Link className='cands__item__link' to={props.path}>
          <figure className='cands__item__pic-wrap' data-category={props.label}>
            <img
              className='cands__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cands__item__info'>
            <h5 className='cands__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CandidateItem;