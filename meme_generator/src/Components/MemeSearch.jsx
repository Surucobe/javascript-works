import React, { Component } from 'react'

class MemeSearch extends Component{
  handleSubmit(e){
    e.preventDefault()
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="meme-form">
        <label htmlFor="">Search here:</label>
        <input placeholder="Type Here" type="text"/>
      </form>
    )
  }
}

export default MemeSearch