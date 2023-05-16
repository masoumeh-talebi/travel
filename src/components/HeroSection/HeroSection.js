import React from 'react'
import Button from '../UI/Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/video/2.mp4' autoPlay loop muted/>
        <div className='hero-buttons'>
            <input className='search-input' type='text' placeholder='جستجوی مکان، شهر، کشور' autoComplete={false}/>
            <Button buttonStyle="btn--search" buttonSize="btn--large" className="btn">
                جستجو
                </Button>

        </div>
    </div>
  )
}

export default HeroSection
