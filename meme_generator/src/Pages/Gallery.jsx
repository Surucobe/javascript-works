import React from 'react'

import Navbar from '../Components/Navbar'
import Mem from '../Components/Meme'
import '../global.css'
import './styles/gallery.css'

class Gallery extends React.Component {
  render() {
    return(
      <div className="page-style">
        <Navbar />
        <div className="gallery-container">
          <div className="gallery-hero">
            <p>Hero section</p>
          </div>
          <div className="gallery">
              <Meme />
            <div>
              <p>Component</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery