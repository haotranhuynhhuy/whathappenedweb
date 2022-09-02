import React from 'react'
import VideoObject_06 from '../../../assets/images/VideoObject_06.svg'
import VideoObject_09 from '../../../assets/images/VideoObject_09.svg'
import './VideoObject.scss'
const VideoObject = () => {
    return (
        <>
            <img src={require('../../../assets/images/Video.png')} alt='' className='video' />
            <img src={require('../../../assets/images/VideoObject_01.png')} alt='' className='video__object1' />
            <img src={require('../../../assets/images/VideoObject_02.png')} alt='' className='video__object2' />
            <img src={require('../../../assets/images/VideoObject_03.png')} alt='' className='video__object3' />
            <img src={require('../../../assets/images/VideoObject_04.png')} alt='' className='video__object4' />
            <img src={require('../../../assets/images/VideoObject_05.png')} alt='' className='video__object5' />
            <img src={VideoObject_06} alt='' className='video__object6' />
            <img src={require('../../../assets/images/VideoObject_07.png')} alt='' className='video__object7' />
            <img src={require('../../../assets/images/VideoObject_08.png')} alt='' className='video__object8' />
            <img src={VideoObject_09} alt='' className='video__object9' />
        </>
    )
}

export default VideoObject