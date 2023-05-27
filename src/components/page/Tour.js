import React from 'react'
import Button from '../UI/Button'
import '../../App.css'
import CardGuid from '../Tour/CardGuid'

function Tour() {
  return (
    <>
      <div className='tourism'>
        <div className='tourism-box'>
          <input type='text' className='search-input' placeholder='نام شهر یا کشور' autoCapite={false} />
          <Button buttonStyle='btn--search--place' btnSize='btn--large'>
            جستوجو
          </Button>
        </div>
      </div>
      <CardGuid />
    </>
  )
}

export default Tour
