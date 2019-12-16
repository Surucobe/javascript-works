import React from 'react'
import { Link } from 'react-router-dom'

  class MemeCard extends React.Component{
    render(){
      return(
        <React.Fragment>
          <ul className="meme-lister">
            {this.props.memes.map((meme) => (
              <li key={ meme.id }>
                <Link className="Actual-Meme" data-line={ meme.box_count } to={`/${meme.id}/NewMeme`}>
                  <img className="Meme-Card" src={ meme.url } alt={ meme.name } />
                </Link>
              </li>
            ))}
          </ul>
        </ React.Fragment>
      )
    }
  }

export default MemeCard