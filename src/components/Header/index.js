import React from 'react'
import logo from '../../assets/images/logo.svg'
import './Header.scss'
const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <img src={logo} alt='' />
            </div>
            <div className='header__right'>
                <p>INTRODUCTION</p>
                <p>SOLUTION</p>
                <p>RATE PLAN</p>
                <p>LOGIN</p>
                <p>APPLY FOR FREE USE</p>
            </div>
        </div>
    )
}

export default Header