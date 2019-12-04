import React, { Component } from 'react'

import MemeCard from '../Components/MemeCard'


class Meme extends Component{
  constructor(props){
    super(props)
    this.state = {
      memes: [
      {
        id: '',
        name: '',
        url: '',
      },
      ]
    }
  }

  async componentDidMount(){
    const call = await fetch('https://api.imgflip.com/get_memes')
    const data = await call.json()
    this.setState({memes: data.data.memes})
  }
  
  render(){
    return(
      <MemeCard memes={this.state.memes} />
    )
  }
}

export default Meme