import React from 'react'

import './styles/NewMeme.css'

class NewMeme extends React.Component{
  state = {
      currentMeme: {
        id: '',
        name: '',
        url: 'https://media.discordapp.net/attachments/404764129895907338/649805823203082260/bm71hbw74qw31.png?width=166&height=300',
      },
    }

  render(){
    return(
      <React.Fragment>
        <div className="NewMeme-Container">
          <form className="NewMeme-Form">
            <label htmlFor="">First Line</label>
            <input type="text" name="first-line" />
            <label htmlFor="">Second line</label>
            <input type="text" name="second-line" />
          </form>
          <div className="NewMeme-img">
            <figure className="edit-meme-container">
              <img className="edit-meme" src={ this.state.currentMeme.url } alt={this.state.currentMeme.name} />
              <span className="edit-text">Hola</span>
              <span className="edit-text">que hay?</span>
            </figure>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default NewMeme