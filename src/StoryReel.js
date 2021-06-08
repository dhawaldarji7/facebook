import React from 'react'
import Story from './Story.js'
import './StoryReel.css'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://wallpaperaccess.com/full/2713199.jpg"
                profileSrc='https://pbs.twimg.com/profile_images/1277836005983354880/9wL5Jc2l_400x400.jpg'
                title="Dhawal Darji"
            />

            <Story 
                image="https://wallpaperaccess.com/full/2713217.jpg"
                profileSrc='https://pbs.twimg.com/profile_images/1277836005983354880/9wL5Jc2l_400x400.jpg'
                title="Dhawal Darji"
            />
        </div>
    )
}

export default StoryReel
