import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <div className='i'>
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className='i-intro'>Hello, I'm </h2>
          <h1 className='i-name'>Merkisha Wilkinson</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">Life-Long Learner</div>
              <div className="i-title-item">UI/UX Designer</div>
            </div>
            <div className="i-title-item">Entrepreneur</div>
          </div>
          <div className="i-desc">
            I design and develop stylish, modern websites. 
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src={ProfilePic} alt="" className='i-img' /> */}
      </div>
    </div>
  )
}
