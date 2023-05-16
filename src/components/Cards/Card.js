import React from 'react'
import './Card.css'
import CardItem from './CardItem'
import Image3 from './images/3.jpg';
import Image4 from './images/4.jpg';
import Image5 from './images/5.jpg';
import Image6 from './images/6.jpg';


function Card() {
    return (
        <div className='cards'>
            <h1>مقاصد برتر</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__item'>
                        <CardItem path="/" lable="ناشناخته ها" src={Image4} text="دیدن آبشار ناشناخته در دل جمگل های آمازون" />
                        <CardItem path="/dervices" lable="ناشناخته ها" src={Image3} text="کویر زیبا در قلب ایران" />
                    </ul>
                    <ul className='cards__item'>
                        <CardItem path="/dervices" lable="لاکچری"  text="سفری خاطره انگیز در جزایر کاراییب" />
                        <CardItem path="/dervices" lable="لاکچری" src={Image5} text="آرامشی عمیق در رشته کوه های آلپ" />
                        <CardItem path="/dervices" lable="ناشناخته ها" src={Image6} text="تجربه ای متفاوت از گردش در یک شهر" />
                    </ul>

                </div>

            </div>

        </div>
    )
}

export default Card
