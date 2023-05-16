import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min'
import Image1 from './images/1.jpg';
import Image2 from './images/2.jpg';
import Image3 from './images/3.jpg';
import Image4 from './images/4.jpg';

import './Card.css'


function CardItem(props) {
    const { path, lable, text,src} = props
    return (
        <div>
            <li className='cards__item'>
                <Router>
                    <Link to={path} className="cards__item__link">
                        <figure className='cards__item__pic__wrap' data-category={lable}>
                            <img src={Image1} className='cards__item__img'/>
                        </figure>
                        <div className='cards__item__info'>
                            <h5 className='cards__item__text'>{text}</h5>
                        </div>
                        <figure className='cards__item__pic__wrap' data-category={lable}>
                            <img src={Image2} className='cards__item__img' />
                        </figure>
                        <div className='cards__item__info'>
                            <h5 className='cards__item__text'>{text}</h5>
                        </div>
                        <figure className='cards__item__pic__wrap' data-category={lable}>
                            <img src={Image3} className='cards__item__img' />
                        </figure>
                        <div className='cards__item__info'>
                            <h5 className='cards__item__text'>{text}</h5>
                        </div>
                        <figure className='cards__item__pic__wrap' data-category={lable}>
                            <img src={Image4} className='cards__item__img' />
                        </figure>
                        <div className='cards__item__info'>
                            <h5 className='cards__item__text'>{text}</h5>
                        </div>
                    </Link>
                </Router>
            </li>
        </div>
    )
}

export default CardItem
