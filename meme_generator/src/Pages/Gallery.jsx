import React, { Component } from 'react'

import Navbar from '../Components/Navbar'
// import Meme from '../Components/Meme'
import MemeSearch from '../Components/MemeSearch'
import '../global.css'
import './styles/gallery.css'

class Gallery extends Component {

  state = {
    memes: []
  }

  render() {
    return(
      <div className="page-style">
        <Navbar />
        <div className="gallery-container">
          <div className="gallery-hero">
            <p>Hero section</p>
          </div>
          <div className="gallery">
            <div>
              <MemeSearch />
              <p>Component</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery