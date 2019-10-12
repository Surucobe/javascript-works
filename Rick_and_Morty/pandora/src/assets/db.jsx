import React from 'react'

  class Heart {
    number() {
    console.log(parseInt(Math.random() * 3000 / 100))
  }

  async core() {
    let data = await fetch(`https://rickandmortyapi.com/api/episode/1`)
    let epis = await data.json()
    console.log(epis)
  }
}

export default Heart