import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel' >
            <Story
                image='https://images-na.ssl-images-amazon.com/images/I/61vAJ1DLrnL._SL1100_.jpg'
                profileSrc='https://globalnews.ca/wp-content/uploads/2016/06/jon-snow.jpg?quality=85&strip=all'
                title='Jonny'
            />
            <Story
                image='https://htc-wallpaper.com/wp-content/uploads/2020/02/Tony-Stark-Iron-Man.jpg'
                profileSrc='https://img1.looper.com/img/uploads/2019/01/Robert-Downey-Jr.-Tony-Stark.jpg'
                title='Tony'
            />
            <Story
                image='https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/5e6f39bff80cb9001e4f13a1.jpg'
                profileSrc='https://avatarfiles.alphacoders.com/167/167527.jpg'
                title='GalG'
            />

        </div>
    )
}

export default StoryReel