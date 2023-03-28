import React from 'react'
import footage_1 from '../../assets/footage-1.jpg'
import footage_2 from '../../assets/footage-2.jpg'
import footage_3 from '../../assets/footage-3.jpg'
import footage_4 from '../../assets/footage-4.jpg'
import footage_5 from '../../assets/footage-5.jpg'
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
            <img src={footage_1} />
            <img src={footage_2} />
            <img src={footage_3} />
            <img src={footage_4} />
            <img src={footage_5} />
        </div>
    </div>
  )
}

export default Gallery