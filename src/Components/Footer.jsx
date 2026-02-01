import React from 'react'
import image_6 from '../assets/logo-png.png'


function Footer() {
  return (
    <div>
        <div className="footer-first-container">
            <div className="footer-first-container-logo">
                <img src={image_6} alt="" />
            </div>
            <div className="footer-first-container-menus">
                <ul className="footer-first-container-menu-list">
                    <li className="nav-list"><a href="/" className="nav-link">Home</a></li>
                    <li className="nav-list"><a href="/about" className="nav-link">About</a></li>
                    <li className="nav-list"><a href="/menu" className="nav-link">Menu</a></li>
                    <li className="nav-list"><a href="" className="nav-link">Reservation</a></li>
                    <li className="nav-list"><a href="" className="nav-link">Contact</a></li>
                </ul>
            </div>
            <div className="footer-first-container-socials">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-snapchat"></i>
            </div>
        </div>
    </div>
  )
}

export default Footer