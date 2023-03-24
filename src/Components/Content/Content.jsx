import React from 'react'
import drone from '../../assets/drone.png'
import blur from '../../assets/blur.png'
import "./Content.css"

const Content = () => {
  return (
    <main>
      <div className="content">
          <div className="type">
              <h1>Drone Racing Gone Wild</h1>
              <p>Register now for the ultimate drone racing event. 5 mile courses and over $10 million in prize money!</p>
          </div>
          <div className="drone-container">
              <img src={blur} className="blur" />
              <img src={drone} className="drone" />
          </div>
      </div>
    </main>
  )
}

export default Content