import React from 'react'
import BestProductItem from './BestProduct'
import './Content.scss'
import IssueProduct from './IssueProduct'
import ListProduct from './ListProduct'
const Content = () => {
    return (
        <div className='content'>
            <img src={require('../../assets/images/main_banner.png')} alt='' />
            <div className='content__container'>
                <img src={require('../../assets/images/bg_image.png')} alt='' />
                <div className='container__text'>
                    <p className='text__title'>WHAT HAPPENED!</p>
                    <p className='text__desc'>How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first
                        step to your brand's success. How to create <br />
                        mobile-optimized videos in minutes.</p>
                </div>
            </div>
            <div className='content__best--product'>
                <div className='content__product'>
                    <p className='product__title'>BEST PRODUCT</p>
                    <p className='product__desc'>How to create mobile-optimized videos in minutes. Not a designer,
                        every team makes a lot of videos Can be trimmed. Take the first </p>
                </div>
                <div className='content__product--item'>
                    <BestProductItem
                        production={require('../../assets/images/production.png')}
                        bestImage={require('../../assets/images/bestimage_01.png')}
                    />
                    <BestProductItem
                        production={require('../../assets/images/production_02.png')}
                        bestImage={require('../../assets/images/bestimage_02.png')}
                    />
                    <BestProductItem
                        production={require('../../assets/images/production_03.png')}
                        bestImage={require('../../assets/images/bestimage_03.png')}
                    />
                </div>
            </div>
            <div className='content__list--product'>
                <ListProduct photo={require('../../assets/images/img_01.png')} />
                <ListProduct photo={require('../../assets/images/img_02.png')} />
                <ListProduct photo={require('../../assets/images/img_03.png')} />
                <ListProduct photo={require('../../assets/images/img_04.png')} />
                <ListProduct photo={require('../../assets/images/img_05.png')} />
                <ListProduct photo={require('../../assets/images/img_06.png')} />
                <ListProduct photo={require('../../assets/images/img_07.png')} />
                <ListProduct photo={require('../../assets/images/img_08.png')} />
                <ListProduct photo={require('../../assets/images/img_09.png')} />
                <ListProduct photo={require('../../assets/images/img_10.png')} />
                <ListProduct photo={require('../../assets/images/img_11.png')} />
                <ListProduct photo={require('../../assets/images/img_12.png')} />
                <ListProduct photo={require('../../assets/images/img_13.png')} />
                <ListProduct photo={require('../../assets/images/img_14.png')} />
                <ListProduct photo={require('../../assets/images/img_15.png')} />
                <ListProduct photo={require('../../assets/images/img_16.png')} />
                <ListProduct photo={require('../../assets/images/img_17.png')} />
                <ListProduct photo={require('../../assets/images/img_18.png')} />
                <ListProduct photo={require('../../assets/images/img_19.png')} />
                <ListProduct photo={require('../../assets/images/img_20.png')} />
                <ListProduct photo={require('../../assets/images/img_21.png')} />
                <ListProduct photo={require('../../assets/images/img_22.png')} />
                <ListProduct photo={require('../../assets/images/img_23.png')} />
                <ListProduct photo={require('../../assets/images/img_24.png')} />
                <ListProduct photo={require('../../assets/images/img_25.png')} />
            </div>
            <div className='btn__seemore'>
                <button >SEE MORE</button>
            </div>
            <div className='content__issue'>
                <div className='content__issue--top'>
                    <p className='issue__title'>HAPPENED'S ISSUE</p>
                    <p className='issue__desc'>모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.  </p>
                    <div className='btn__seemore'>
                        <button>SEE MORE</button>
                    </div>
                    <img src={require('../../assets/images/NewsObject_01.png')} alt='' className='issue__icon1' />
                    <img src={require('../../assets/images/NewsObject_02.png')} alt='' className='issue__icon2' />
                </div>
                <div className='content__issue--bottom'>
                    <div className='issue__first'>
                        <p className='issue__first--title'>WHPNISSUE</p>
                        <img src={require('../../assets/images/NewsImg_01.png')} alt='' className='issue__first--img' />
                        <img src={require('../../assets/images/NewsObject_03.png')} alt='' className='issue__first--object' />
                    </div>
                    <div className='issue__seccond'>
                        <IssueProduct brand={'B BRAND'} brandImg={require('../../assets/images/NewsImg_02.png')} />
                        <img src={require('../../assets/images/NewsObject_04.png')} alt='' className='issue__first--object2' />
                    </div>
                    <IssueProduct brand={'C BRAND'} brandImg={require('../../assets/images/NewsImg_02.png')} />
                    <div className='issue__third'>
                        <IssueProduct brand={'D BRAND'} color={'#ff5500'} brandImg={require('../../assets/images/NewsImg_03.png')} />
                        <img src={require('../../assets/images/NewsObject_05.png')} alt='' className='issue__first--object3' />
                    </div>
                    <IssueProduct brand={'E BRAND'} brandImg={require('../../assets/images/NewsImg_04.png')} />
                </div>
            </div>
        </div>
    )
}

export default Content