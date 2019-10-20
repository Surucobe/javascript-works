import React from 'react'

import proto_logo from '../test_img/Nero.jpg'
import './estilos/episode.css'

const char = {
  name: 'Suru',
  Id: '001',
  Status: 'alive',
  Location: 'earth',
  episode: 'secret',
}

function number(){
  console.log(parseInt(Math.random() * 3000 / 100))
}

async function core(){
  let data = await fetch(`https://rickandmortyapi.com/api/episode/${number()}`)
  let epis = await data.json()
  console.log(epis)
}

class Episode extends React.Component{
  render(){
    return(
      <div className="main_episode-container">
        <div className="main_episode-header">
          <h1>Titulo del Episodio</h1>
        </div>
        <div className="main_episode-personajes">
          <div className="main_episode-personajes-div">
            <img src={proto_logo} alt="Proto" className="main_episode-personaje-img"/>
            <div className="main_episode-personaje-info">
              <span><strong>{char.name}</strong></span>
              <span><strong>{char.Id}</strong></span>
              <span><strong>{char.Status}</strong></span>
              <span><strong>{char.Location}</strong></span>
              <span><strong>{char.episode}</strong></span>
            </div>
          </div>
          <div className="main_episode-personajes-div">
            <img src={proto_logo} alt="Proto" className="main_episode-personaje-img" />
            <div className="main_episode-personaje-info">
              <span><strong>{char.name}</strong></span>
              <span><strong>{char.Id}</strong></span>
              <span><strong>{char.Status}</strong></span>
              <span><strong>{char.Location}</strong></span>
              <span><strong>{char.episode}</strong></span>
            </div>
          </div>
          <div className="main_episode-personajes-div">
            <img src={proto_logo} alt="Proto" className="main_episode-personaje-img" />
            <div className="main_episode-personaje-info">
              <span><strong>{char.name}</strong></span>
              <span><strong>{char.Id}</strong></span>
              <span><strong>{char.Status}</strong></span>
              <span><strong>{char.Location}</strong></span>
              <span><strong>{char.episode}</strong></span>
            </div>
          </div>
          <div className="main_episode-personajes-div">
            <img src={proto_logo} alt="Proto" className="main_episode-personaje-img" />
            <div className="main_episode-personaje-info">
              <span><strong>{char.name}</strong></span>
              <span><strong>{char.Id}</strong></span>
              <span><strong>{char.Status}</strong></span>
              <span><strong>{char.Location}</strong></span>
              <span><strong>{char.episode}</strong></span>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Episode