import React, { useState } from 'react'
import { BrowserRouter as Router, Link, BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { FaTypo3, FaAlignJustify, FaTimes, FaFontAwesome } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FaTimes,FaAlignJustify,FaTypo3 } from '@fortawesome/free-solid-svg-icons'
import './Nav.css'
import Button from '../UI/Button'
import { useEffect } from 'react';

function Navbar() {
    const [menuState, setMenuState] = useState(false)
    const [buttonState, setButtonState] = useState(true)
    const menuHandher = () => setMenuState(!menuState)
    const closeMobileMenu = () => setMenuState(false)

useEffect(()=>{
    handleButton()
},[])
    const handleButton = () => {
        if (window.innerWidth <= 960) {
            setButtonState(false)
        } else {
            setButtonState(true)
        }
    }
    window.addEventListener('resize', handleButton)
    return (
        <BrowserRouter>
            <Router>
                <nav className='navbar'>
                    <div className='navbar-container'>
                        <Link to="/" className='navbar-logo'>
                            Travel
                            <FaTypo3 />
                        </Link>
                        <div className='menu-icon' onClick={menuHandher}>
                            <FaAlignJustify className={menuState ? 'FaTimes' : 'FaAlignJustify'} />
                            {/* <FontAwesomeIcon icon={menuState ? 'FaTimes' : 'FaAlignJustify'} /> */}
                        </div>
                        <ul className={menuState ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                    صفحه اصلی
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/tourism" className='nav-links' onClick={closeMobileMenu}>
                                    گردشگری
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/tour" className='nav-links' onClick={closeMobileMenu}>
                                    تور
                                </Link>
                            </li>
                            <li>
                                <Link to="/sign-Up" className='nav-links-mobile' onClick={closeMobileMenu}>
                                    ثبت نام
                                </Link>
                            </li>

                        </ul>
                        {
                            buttonState ?
                                <Button buttonStyle="btn--outline" to="/sign-up">
                                    ثبت نام
                                </Button> : null
                        }
                    </div>
                </nav>
            </Router>
        </BrowserRouter>
    )
}

export default Navbar
