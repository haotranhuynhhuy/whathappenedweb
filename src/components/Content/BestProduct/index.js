import React from 'react'
import './BestProductItem.scss'
const BestProductItem = ({ production, bestImage }) => {
    return (
        <div className='product__item'>
            <img src={bestImage} alt='' className='product__image' />
            <img src={production} alt='' className='product__icon' />
            <div className='product__item--box'>
                <div className='product__content'>
                    <p className='product__content--title'>How to create
                        mobile-optimized</p>
                    <img src={require('../../../assets/images/go_icon.png')} alt='' className='product__content--go' />
                </div>
            </div>
        </div>
    )
}

export default BestProductItem