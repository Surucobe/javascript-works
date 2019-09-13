const DATA = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode"
}
const $info = document.getElementById('info')
const img = document.querySelector('img')
const $id = document.getElementById('identidad')
const $stat = document.getElementById('status')
const $specie = document.getElementById('species')
const $gender = document.getElementById('gender')
const $location = document.getElementById('location')

function num(){
  return parseInt(Math.random() * 50000 / 100)
}

async function getChar(){
  const data = await fetch(`${DATA.characters}/${num()}`)
  const char = await data.json()
  console.log(`ID:${char.id} \n\Name:${char.name} \n\Status:${char.status}`)
  console.log(char)
  render(char)
}

function render(obj){
  let name = $info.querySelector('h3')
  img.setAttribute('src', obj.image)
  name.textContent = obj.name
  $id.textContent = obj.id
  $stat.textContent = obj.status
  $specie.textContent = obj.species
  $gender.textContent = obj.gender
  $location.textContent = obj.location.name
}