import React from 'react'
import { Link } from 'react-router-dom'
import './CardGuid.css'
import Button from '../UI/Button'

const INFO = [
    {
        text: "تور طبیعت گردی "
    },
    {
        text: "تور چند روزه"
    },
    {
        text: "تور یک روزه"
    },
    {
        text: "تورهای داخلی"
    },
    {
        text: "تورهای خارجی"
    },
    {
        text: "تور ماجراجویانه"
    },
    {
        text: "تورهای خارجی"
    },
]


function CardGuid() {
    return (
        <>
            <div className='container'>
                <div className='tour__tabs'>
                    <div className='tour__wrapper'>
                        <ul className='nav-tabs'>
                            {INFO.map((item, index) =>
                                <li key={index}>
                                    <Link to="/" className="anchor">
                                        <h5>{item.text}</h5>
                                    </Link>
                                </li>
                            )
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className='tour__tabs'>
                <div className='tab-content'>
                    <div className='tab-pane'>
                        <header className='tab-header'>
                            <div className='tab-text'>
                                تور
                            </div>
                            <div className='tab-sort-filter tab-text'>
                                مرتب شده بر اساس
                                <span className='selectTours'>
                                    <select className='tab-sort-input'>
                                        <option value="newest">جدیدترین </option>
                                        <option value="chipest">ارزان ترین </option>
                                        <option value="viewCount">پربازدید ترین</option>
                                    </select>
                                </span>
                            </div>
                        </header>
                        <div className='tabs-content'>
                            <ul>
                                <li>
                                    <Link className="anchor">
                                        <span>
                                            تور 2روز و 3شب
                                        </span>
                                        <p>از 1.600.000</p>
                                        <p>از 2 آذر 1399 الی 4 آذر 1399</p>
                                        <p>شرکت خدمات سفر تعطیلات</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="anchor">
                                        <span>
                                            تور 2روز و 3شب
                                        </span>
                                        <p>از 1.600.000</p>
                                        <p>از 2 آذر 1399 الی 4 آذر 1399</p>
                                        <p>شرکت خدمات سفر تعطیلات</p>
                                    </Link>
                                </li>
                            </ul>
                            <div className='more-tour-button'>
                                <Button buttonStyle="btn--tour" buttonSize="btn--large">
                                    توره های بیشتر
                                </Button>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CardGuid
