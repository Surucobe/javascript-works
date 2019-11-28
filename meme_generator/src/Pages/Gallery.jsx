import React, { Component } from 'react'

import Navbar from '../Components/Navbar'
import Meme from '../Components/Meme'
import MemeSearch from '../Components/MemeSearch'
import '../global.css'
import './styles/gallery.css'

class Gallery extends Component {

  render() {
    return(
      <div className="page-style">
        <Navbar />
        <div className="gallery-container">
          <div className="gallery-hero">
            <p>Hero section</p>
          </div>
          <div className="gallery">
            <MemeSearch />
            <div className="Gallery-Assambled">
              <Meme 
              name="Suru"
              lastName="Atlas"
              hobby="Coding"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery