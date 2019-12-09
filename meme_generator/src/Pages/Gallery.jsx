import React, { Component } from 'react'

import Meme from '../Components/Meme'
import Hero from '../Components/Hero'
// import MemeSearch from '../Components/MemeSearch'
import '../global.css'
import './styles/gallery.css'

class Gallery extends Component {

  render() {
    return(
      <div className="page-style">
        <div className="gallery-container">
          <div className="gallery">
            <div className="Gallery-Assambled">
              <Meme />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery