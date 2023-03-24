import React from 'react'
import footageOne from '../../assets/footage-1.jpg'
import footageTwo from '../../assets/footage-2.jpg'
import footageThree from '../../assets/footage-3.jpg'
import footageFour from '../../assets/footage-4.jpg'
import footageFive from '../../assets/footage-5.jpg'
import "./Gallery.css"

const Gallery = () => {
  return (
    <div className="gallery">
        <div className="footage-content">
            <h2>Last year's footage</h2>
            <p>With over 5,000 participants, 2020 featured some of the most amazing drone races from the most competitive field ever seen.</p>
            <p>In 2021, we’re about to double the excitement with 10,000 race participants and 100,000 fans!</p>
        </div>
        <div className="gallery-container">
            <img src={footageOne} />
            <img src={footageTwo} />
            <img src={footageThree} />
            <img src={footageFour} />
            <img src={footageFive} />
        </div>
    </div>
  )
}

export default Gallery