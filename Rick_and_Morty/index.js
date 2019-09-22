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

function num(){
  return parseInt(Math.random() * 49300 / 100)
}

async function getChar(){
  const data = await fetch(`${DATA.characters}/${num()}`)
  const char = await data.json()
  console.log(char)
  CHARLIST.push(char)
  // render(char)
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
    let obj = await getChar()
    render(obj)
  })
})

function removeSelec(){
  $li.forEach((x) => {
    // debugger
    if (x.classList.contains('selected') == true){
      x.classList.remove('selected')
    }
  })
}

function rick(){
  Promise.all([getChar(), getChar(), getChar(), getChar(), getChar()])
}

rick()