import React from 'react'
import Button from '../UI/Button'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import { FaTypo3,FaFacebookF,FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    به خبرنامه ها بپیوندید تا آفرهای تورهای ایرانگردی و جهانگردی با خبر شوید
                </p>
                <p className='footer-subscription-text'>
                    هر زمان که بخواهید میتوانید عضویت خود را لغو نمایید
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' className='footer-input' placeholder='لطفا ایمیل خود را وارد نمایید' />
                        <Button buttonStyle="btn--special">عضویت</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>درباره ما</h2>
                    <Link to="/">موقعیت های شغلی</Link>
                    <Link to="/">تماس با ما</Link>
                    <Link to="/">همکاری با ما</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>راهنما</h2>
                    <Link to="/">نقشه سایت</Link>
                    <Link to="/">سوال هلی متداول</Link>
                    <Link to="/">حریم شخصی</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>رزرو</h2>
                    <Link to="/">رزرو هتل</Link>
                    <Link to="/">رزرو بلیط هواپیما</Link>
                    <Link to="/">رزرو بلیط قطار</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2 style={{fontSize:'20px'}}>شبکه های اجتماعی</h2>
                    <Link to="/">اینستاگرام</Link>
                    <Link to="/">توییتر</Link>
                    <Link to="/">لینکدین</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                         <Link to="/" className="social-logo">
                            Travel<FaTypo3 />
                        </Link>
                    </div>
                    <small className='website-rights'>
                        Travel Ⓒ 2020
                    </small>
                    <div className='social-icons '>
                        <Link to="/" className="social-icon-link facebook">
                            <FaFacebookF/>
                        </Link>
                        <Link to="/" className="social-icon-link instagram">
                            <FaInstagram/>
                        </Link>
                        <Link to="/" className="social-icon-link twitter">
                            <FaTwitter/>
                        </Link>
                        <Link to="/" className="social-icon-link linkdin">
                            <FaLinkedin/>
                        </Link>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Footer
