import React from 'react'

import proto_logo from '../test_img/wolf.gif'
import './estilos/episode.css'

const name = "hola"

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
              <span><strong>{name}</strong></span>
              <span><strong>ID</strong></span>
              <span><strong>Status</strong></span>
              <span><strong>Location</strong></span>
              <span><strong>Episode</strong></span>
            </div>
          </div>
          <div className="main_episode-personajes-div">
            <img src={proto_logo} alt="Proto" className="main_episode-personaje-img" />
            <div className="main_episode-personaje-info">
              <span><strong>{name}</strong></span>
              <span><strong>ID</strong></span>
              <span><strong>Status</strong></span>
              <span><strong>Location</strong></span>
              <span><strong>Episode</strong></span>
            </div>
          </div>
          <div className="main_episode-personajes-div">
            <img src={proto_logo} alt="Proto" className="main_episode-personaje-img" />
            <div className="main_episode-personaje-info">
              <span><strong>{name}</strong></span>
              <span><strong>ID</strong></span>
              <span><strong>Status</strong></span>
              <span><strong>Location</strong></span>
              <span><strong>Episode</strong></span>
            </div>
          </div>
          <div className="main_episode-personajes-div">
            <img src={proto_logo} alt="Proto" className="main_episode-personaje-img" />
            <div className="main_episode-personaje-info">
              <span><strong>{name}</strong></span>
              <span><strong>ID</strong></span>
              <span><strong>Status</strong></span>
              <span><strong>Location</strong></span>
              <span><strong>Episode</strong></span>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Episode