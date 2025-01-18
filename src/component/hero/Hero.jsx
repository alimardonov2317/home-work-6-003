import React from 'react'
import "./Hero.scss"
import play from "../../assets/hover.svg"
import hero from "../../assets/hero.png"

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__content">
                        <div className="hero__show">
                            <img src={play} alt="play" />
                            <p>Play showreel</p>
                        </div>
                        <h2 className='hero__title'>Enjoy studying
                            with Createx Online Courses</h2>
                        <div className="hero__actions">
                            <button className='hero__btn-about'>About us</button>
                            <button className='hero__btn-explore'>Explore courses</button>
                        </div>
                    </div>
                    <div className="hero__image">
                        <img src={hero} alt="hero" />
                    </div>
                </div>
                <div className="hero__info">
                    <p>1200 <span>Students graduated</span></p>
                    <p>84 <span>Completed courses</span></p>
                    <p>16 <span>Qualified tutors</span></p>
                    <p>5 <span>Years of experience</span></p>
                </div>
            </div>
        </div>
    )
}

export default Hero