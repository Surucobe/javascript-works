import React from 'react'

import './estilos/episode.css'

class Episode extends React.Component{
  render(){
    return(
      <div className="main_episode-container">
        <div className="main_episode-header">
          <h1>Titulo del Episodio</h1>
        </div>
        <div className="main_episode-personajes">
          <div className="main_episode-personajes-div">
            <img src="" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}

export default Episode