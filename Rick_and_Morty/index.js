const URL = 'https://rickandmortyapi.com/api/'
const DATA = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode"
}

const num = parseInt(Math.random() * 100000 / 100)

async function getChar(){
  const data = await fetch(`${DATA.characters}/${num}`)
  const char = await data.json()
  console.log(char.id, char.name, char.status)
}

getChar()