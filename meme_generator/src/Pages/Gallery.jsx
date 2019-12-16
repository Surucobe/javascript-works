import React, { Component } from 'react'

import MemeCard from '../Components/MemeCard'

import '../global.css'
import './styles/gallery.css'

class Gallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading: true,
      memes: [
        {
          id: '',
          name: '',
          url: '',
        },
      ],
    }
  }

  sendData = e =>{
      console.log(e.target.alt)
      this.current = this.props.memes.filter(meme => meme === e.target.alt)
      console.log(this.current)
    }

  async componentDidMount(){
    try{
      const call = await fetch('https://api.imgflip.com/get_memes')
      const data = await call.json()
      this.setState({loading: false, memes: data.data.memes})
    }catch(error){
      console.log(error)
    }
  }

  render() {
    return(
      <div className="page-style">
        <div className="gallery-container">
          <div className="gallery">
            <div className="Gallery-Assambled">
              <MemeCard
              memes= {this.state.memes}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery