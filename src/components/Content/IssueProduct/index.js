import React from 'react'
import './IssueProduct.scss'
const IssueProduct = ({ brand, brandImg, color }) => {
    return (
        <div className='issue__wrapper' style={{ background: color }}>
            <div className='issue__seccond--top'>{brand}</div>
            <img src={brandImg} alt='' className='issue__seccond--img' />
        </div>
    )
}

export default IssueProduct