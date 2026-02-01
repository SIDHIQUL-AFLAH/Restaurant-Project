import React from 'react'

function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="nav-items">
                <ul>
                    <li className="nav-list"><a href="/" className="nav-link">Home</a></li>
                    <li className="nav-list"><a href="/about" className="nav-link">About</a></li>
                    <li className="nav-list"><a href="/menu" className="nav-link">Menu</a></li>
                    <li className="nav-list"><a href="" className="nav-link">Reservation</a></li>
                    <li className="nav-list"><a href="" className="nav-link">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar