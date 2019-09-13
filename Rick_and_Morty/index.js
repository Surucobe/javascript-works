const IMG_TEST = '../'
const DATA = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode"
}

function num(){
  return parseInt(Math.random() * 10000 / 100)
}

async function getChar(){
  const data = await fetch(`${DATA.characters}/${num()}`)
  const char = await data.json()
  console.log(`ID:${char.id} \n\Name:${char.name} \n\Status:${char.status}`)
  console.log(char)
}