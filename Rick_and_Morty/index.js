const DATA = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode"
}

const $char = document.getElementById('char')
const $li = document.querySelectorAll('li')
const main = document.getElementById('main_container')
const head = document.getElementById('header')
const epi = document.getElementById('episode')

function rendering(tem) {
  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = tem
  return html.body.children[0]
}

function num(){
  let num = parseInt(Math.random() * 3500 / 100)
  if(num != 0){
    return num
  }else{
    return num += 1
  }
}

function characters(obj) {
  return (
    `<div class="char-container-char" data-name"${obj.name}" data-id"${obj.id}">
    <img src="${obj.image}" alt="image" class="char-img">
      <div class="info">
        <h3>Name ${obj.name}</h3>
        <p>
          ID: ${obj.id}
        </p>
        <p>
          Status: ${obj.status}
        </p>
        <p>
          Specie: ${obj.species}
        </p>
        <p>
          Gender: ${obj.gender}
        </p>
        <p>
          Location: ${obj.location.name}
        </p>
      </div>
  </div>`
  )
}

function episodes(obj){
  return(
    `<div>
        <h2>${obj.name}</h2>
        <h2>${obj.episode}</h2>
        <h2>${obj.air_date}</h2>
     </div>`
  )
}

async function getChar(url){
  // const data = await fetch(`${url}/${num()}`)
  const data = await fetch(`${url}`)
  const char = await data.json()
  console.log(char)
  return char
}

async function getEpisode(){
  const data = await fetch(`${DATA.episodes}/${num()}`)
  const char = await data.json()
  console.log(char)
  return char
}

const option = head.querySelectorAll('div')
option.forEach((x) => {
  x.addEventListener('click', () => alert('working'))
})

$char.onclick = () => morty()

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

function clearMain(){
  while (main.firstChild) {
      main.removeChild(main.firstChild)
    }
}

async function morty(){
  const promises = await getEpisode()
  debugger
  let charList = await promises.characters.slice(0,4)
  // let objList = await charList.forEach((items) => getChar(items))
  let objLi = await getChar(charList[0])
  objLi.forEach(async (items) =>{
    let string = characters(items)
    let ren = rendering(string)
    let limpio = await clearMain()
    main.append(ren)
    main.children[0].style = "z-index: 1;"
    $li[0].classList.add('selected')
  })
}
morty()

function nodos() {
  for (let i = 0; i < main.children.length; i++) {
    main.children[i].style = "z-index: 0;"
  }
}

$li.forEach((items) => {
  items.addEventListener('click', (event) => {
    let N = (event.srcElement.dataset.set)
    nodos()
    main.children[N].style = "z-index: 2;"
  })
})

//testing area
function match(){
  //funcion que aregara dinamismo y union a la lista y al contenedor
  //$li debe verificar donde esta main
}