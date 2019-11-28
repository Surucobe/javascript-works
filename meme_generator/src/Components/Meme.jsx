import React, { Component } from 'react'

componentDidMount(){
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json)
    .then((data) => {
      this.setState({ array: {
        name: 'suru'
      } })
    })
  }

class Meme extends Component{
  render(){
    return(
      <div>
        <p> { this.props.name } </p>
      </div>
    )
  }
}

export default Meme