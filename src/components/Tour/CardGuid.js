import React from 'react'
import { Link } from 'react-router-dom'
import './CardGuid.css'

const INFO =[
    {
        text:"تور طبیعت گردی "
    },
    {
        text:"تور چند روزه"
    },
    {
        text:"تور یک روزه"
    },
    {
        text:"تورهای داخلی"
    },
    {
        text:"تورهای خارجی"
    },
    {
        text:"تور ماجراجویانه"
    },
    {
        text:"تورهای خارجی"
    },
]
function CardGuid() {
    return (
        <>
            <div className='container'>
                <div className='tour__tabs'>
                    <div className='tour__wrapper'>
                        <ul className='nav-tabs'>
                            {INFO.map((item,index)=>
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
        </>
    )
}

export default CardGuid
