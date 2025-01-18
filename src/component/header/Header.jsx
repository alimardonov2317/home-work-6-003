import React from 'react'
import "../../reset/reset.scss"
import "./Header.scss"
import sitelogo from "../../assets/logo.png"
import person from "../../assets/Person.svg"
import { LINKS } from '../../static'



const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className='navbar'>
                    <div className="navbar__logo">
                        <a href="#"><img src={sitelogo} alt="logo" /></a>
                    </div>
                    <ul className='navbar__collection'>
                        {
                            LINKS.map((item, inx) => (
                                <li className='navbar__item' key={inx}>
                                    <a href={item.link}><span>{item.title}</span></a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="navbar__actions">
                        <button className='navbar__btn-cons'>Get consultation</button>
                        <button className='navbar__btn-log'><img src={person} alt="" /> Get consulta </button>
                    </div>


                </nav>
            </div>
        </header>
    )
}

export default Header

