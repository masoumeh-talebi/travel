import React from 'react'
import Button from '../UI/Button'
import CardGuid from '../Tourism/CardGuid'
import '../../App.css'

function Tourism() {
  return (
    <div className='tourism'>
      <h1 style={{color:"#fff" ,fontSize:'40px'}} > پرتال جامع گردش و سفر </h1>
      <p>پرتال جامع گردش و سفر</p>
      <div className='tourism-box'>
        <input type='text' className='search-input' placeholder='جستوجوی کشور ، شهر و ...' autoCapite={false}/>
        <Button buttonStyle='btn--search--place' btnSize='btn--large'>
          جستوجوی
        </Button>

      </div>
      <CardGuid/>
    </div>
  )
}

export default Tourism
