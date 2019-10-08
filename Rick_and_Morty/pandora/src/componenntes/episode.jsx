import React from 'react'

import './estilos/episode.css'

class Episode extends React.Component{
  render(){
    return(
      <div className="main_episode-container">
        <h1 className="main_episode-header">Titulo del Episodio</h1>
        <div className="main_episode-personajes">
          <div></div>
        </div>
      </div>
    )
  }
}

export default Episode