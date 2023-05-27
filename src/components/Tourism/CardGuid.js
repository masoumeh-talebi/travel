import React from 'react'
import '../../App.css'
import CardItem from './CardItem'
import Compare from '../Cards/images/compare.png'

function CardGuid() {
  return (
    <div className='cards'>
      <h1>بهترین راهنمای ایرانگردی، جهانگردی، خرید بلیط هواپیما، راهنمای اخذ ویزا، رزرو هتل و مکانهای اقامتی، مکانهای گردشگری</h1>
      <p>پرتال جامع گردش و سفر</p>
      <div className='cards__container'>

        <div className='cards__wrapper'>
          <ul className='card__item'>
            <CardItem src={Compare} title="دانستنی ها" text="معرفی جذابیت های ایران و جهان" />
            <CardItem src={Compare} title=" جستجوی پیشرفته" text="جستجوی تمامی مقاصد سفرهای شما" />
            <CardItem src={Compare} title=" راهنمای جامع گردش و تفریح " text="راهنمای سفر به شهرهای ایران و جهان" />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CardGuid;
