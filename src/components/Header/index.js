
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import logo from '../../assets/images/logo.svg'
import './Header.scss'
const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <div className='header'>
            <div className='header__left'>
                <img src={logo} alt='' />
            </div>
            <div className={isNavExpanded ? 'header__right--expand' : 'header__right'}>
                <p>INTRODUCTION</p>
                <p>SOLUTION</p>
                <p>RATE PLAN</p>
                <p>LOGIN</p>
                <p>APPLY FOR FREE USE</p>
                <FontAwesomeIcon icon={faX} className='iconX' onClick={() => setIsNavExpanded(false)} />
            </div>
            <FontAwesomeIcon icon={faBars} className='icon' onClick={() => setIsNavExpanded(true)} />
        </div>
    )
}

export default Header