import React, { Component } from 'react'

import MemeCard from '../Components/MemeCard'


class Meme extends Component{
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
      ]
    }
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
  
  render(){
    return(
      <MemeCard memes={this.state.memes} />
    )
  }
}

export default Meme