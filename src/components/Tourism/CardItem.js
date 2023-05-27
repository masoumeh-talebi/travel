import React from 'react'
import './CardGuid.css'
import Compare from '../Cards/images/compare.png'
import { text } from '@fortawesome/fontawesome-svg-core'

function CardItem(props) {
  const { src, title, text } = props
  return (
    <li className='cards__item'>
      <div className='compare-item'>
        <div className='compare-image-list'>
          <img src={Compare} />
          <div className='compere-item-title'>{title}</div>
          <div className='compere-item-exp'>{text}</div>
        </div>
      </div>
    </li>
  )
}

export default CardItem
