import React from 'react'

import './styles/NewMeme.css'

class NewMeme extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div className="NewMeme-Container">
          <h1>Here you make new meme</h1>
          <img src={this.state.current_meme.url} alt=""/>
        </div>
      </React.Fragment>
    )
  }
}

export default NewMeme