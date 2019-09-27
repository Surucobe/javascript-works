const DATA = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode"
}

const CHARLIST = []
const $char = document.getElementById('char')
const $li = document.querySelectorAll('li')
const main = document.getElementById('main_container')
const head = document.getElementById('header')
let collection 

function rendering(tem) {
  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = tem
  return html.body.children[0]
}

function num(){
  return parseInt(Math.random() * 49000 / 100)
}

function characters(obj) {
  return (
    `<div class="char-container-char">
    <img src="${obj.image}" alt="image" class="char-img">
      <div class="info">
        <h3>Name ${obj.name}</h3>
        <p>
          ID: <span>${obj.id}</span>
        </p>
        <p>
          Status: <span>${obj.status}</span>
        </p>
        <p>
          Specie: <span>${obj.species}</span>
        </p>
        <p>
          Gender: <span>${obj.gender}</span>
        </p>
        <p>
          Location: <span>${obj.location.name}</span>
        </p>
      </div>
  </div>`
  )
}

async function getChar(){
  const data = await fetch(`${DATA.characters}/${num()}`)
  const char = await data.json()
  console.log(char)
  CHARLIST.push(char)
  return char
}

const option = head.querySelectorAll('div')
option.forEach((x) => {
  x.addEventListener('click', () => alert('working'))
})

$char.onclick = () => {
  CHARLIST.splice(0)
  rick()
}

function removeSelec() {
  $li.forEach((x) => {
    if (x.classList.contains('selected') == true) {
      x.classList.remove('selected')
    }
  })
}

$li.forEach((x) =>{
  x.addEventListener('click', async() =>{
    removeSelec()
    x.classList.add('selected')
  })
})

async function rick(){
  //debugger
  CHARLIST.splice(0)
  const prom = await Promise.all([getChar(), getChar(), getChar(), getChar(), getChar()])
}

async function morty(){
  let riky = await rick()
  CHARLIST.forEach(async (items) =>{
    let string = characters(items)
    let g = rendering(string)
    main.append(g)
  })
}
