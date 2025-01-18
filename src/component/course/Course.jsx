import React from 'react'
import "./Course.scss"
import { USERS } from '../../static'

const Course = () => {
    return (
        <div className='course'>
            <div className="container">
                <div className="course__top">
                    <div className="course__top-text">
                        <p>Ready to learn?</p>
                        <h3>Featured Courses</h3>
                    </div>
                    <button className='course__btn'>View all courses</button>
                </div>
                <div className="course__wrapper">
                    {
                        USERS.map((user) => (
                            <div key={user.id} className="course__card">
                                <div className="course__image">
                                    <img src={user.url} alt={user.name} />
                                </div>
                                <div className="course__content">
                                    <span style={{ background: user.profession.bg }} className='course__prof'>{user.profession.title}</span>
                                    <p className='course__title'>{user.title}</p>
                                    <p className='course__price'>{user.price}$ <span> {user.name}</span></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Course