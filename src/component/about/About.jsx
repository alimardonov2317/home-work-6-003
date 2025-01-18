import React from 'react'
import "./About.scss"
import createx from "../../assets/createx.png"
import checked from "../../assets/check.svg"
import { CREATEX } from '../../static'

const About = () => {
    return (
        <div className='about'>
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__image">
                        <img src={createx} alt="createx" />
                    </div>
                    <div className="about__content">
                        <p className='about__desc'>Who we are</p>
                        <h3 className='about__title'>Why Createx?</h3>
                        {
                            CREATEX.map((item, inx) => (
                                <span key={inx}><img src={checked} alt="checked" />{item}</span>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About