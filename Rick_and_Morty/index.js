const DATA = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode"
}

const CHARLIST = []
const $info = document.getElementById('info')
const img = document.querySelector('img')
const $id = document.getElementById('identidad')
const $stat = document.getElementById('status')
const $specie = document.getElementById('species')
const $gender = document.getElementById('gender')
const $location = document.getElementById('location')
const $char = document.getElementById('char')
const $li = document.querySelectorAll('li')
const main = document.getElementById('main_container')
const mainDiv = main.querySelectorAll('div .char-container-char')

function num(){
  return parseInt(Math.random() * 49000 / 100)
}

async function getChar(){
  const data = await fetch(`${DATA.characters}/${num()}`)
  const char = await data.json()
  console.log(char)
  CHARLIST.push(char)
  return char
}

function render(obj){
  let name = $info.querySelector('h3')
  img.setAttribute('src', obj.image)
  name.textContent = ` ${obj.name}`
  $id.textContent = ` ${obj.id}`
  $stat.textContent = ` ${obj.status}`
  $specie.textContent = ` ${obj.species}`
  $gender.textContent = ` ${obj.gender}`
  $location.textContent = ` ${obj.location.name}`
}


$char.onclick = () => {
  CHARLIST.splice(0)
  rick()
}

$li.forEach((x) =>{
  x.addEventListener('click', async() =>{
    removeSelec()
    x.classList.add('selected')
  })
})

function removeSelec(){
  $li.forEach((x) => {
    if (x.classList.contains('selected') == true){
      x.classList.remove('selected')
    }
  })
}

function rick(){
  Promise.all([getChar(), getChar(), getChar(), getChar(), getChar()])
}

async function damnItMorty(){
  await rick()
  mainDiv.forEach( x =>{
    render(CHARLIST[x])
  })
}
damnItMorty()