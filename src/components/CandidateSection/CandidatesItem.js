import React from 'react';
import { Link } from 'react-router-dom';

function CandidatesItem(props) {
  return (
    <>
      <li className='candis__item'>
        <Link className='candis__item__link' to={props.path}>
          <div className='candis__item__info'>
            <h5 className='candis__item__text'>{props.text}</h5>
            <h5 className='candis__item__subtext'>{props.subtext1}</h5>
            <h5 className='candis__item__subtext'>{props.subtext2}</h5>
            <h5 className='candis__item__subtext'>{props.subtext3}</h5>
            <h5 className='candis__item__subtext'>{props.subtext4}</h5>
            <h5 className='candis__item__subtext'>{props.subtext5}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CandidatesItem;