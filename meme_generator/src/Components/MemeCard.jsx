import React from 'react'
import { Link } from 'react-router-dom'

  class MemeCard extends React.Component{
    render(){
      return(
        <React.Fragment>
          {this.props.memes.map((meme) => (
            <Link key={ meme.id } data-line={ meme.box_count } className="Meme-Card" to="/NewMeme">
              <img className="Actual-Meme" src={ meme.url } alt={ meme.name } />
            </Link>
          ))}
        </ React.Fragment>
      )
    }
  }

export default MemeCard