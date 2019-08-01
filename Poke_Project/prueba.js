const POKE_URL_REAL = 'https:pokeapi.co/api/v2/pokemon/'
const mensaje = ['¡Felicidades!', 'Busca a tu pokemon <br> por nombre o ID', 'Error']
const usuario = []
const pokebox = []

const go = document.getElementById('pokedex')
const $poke = document.getElementById('poke_all')
const $box = document.getElementById('poke_box')
const $bye = document.getElementById('poke_bye')
const $agree = document.getElementById('agree')
const $overlay = document.getElementById('overlay')
const $modal = document.getElementById('modal')
const $info = document.getElementById('info')
const $titulo = document.getElementById('titulo')
const $intel = document.querySelector('form')
const $national = document.getElementById('national')
const $library = document.getElementById('library')
const $close = document.getElementById('close')
const $tiny = document.getElementById('tiny')

function createTemplate(string){
  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = string
  return html.body.children[0]
}

function yaRegistrado(obj){
  const dato = pokebox.includes(obj.id)
  if(dato == false){
    pokebox.push(obj.id)
    usuario.push(obj)
  }
}

async function whoIsPoke(i) {
  const brook = await fetch(`${POKE_URL_REAL + i}`, {crossDomain: true, mode: 'cors', method: 'GET'})
  const cook = await brook.json()
  if (cook.sprites.front_default){
    return cook
  }
  throw new Error('Missing image')
}

async function oak(obj){
  const poem = window.localStorage.getItem(obj)
  if(poem){
    return JSON.parse(poem)
  }
  const pok = await whoIsPoke(obj)
  return pok
}

function titulo(n){
  return(
    `<h1>${mensaje[n]}</h1>`
  )
}

function almacen(obj){
  let n = {
    id: obj.id,
    types: obj.types,
    name: obj.name,
    sprites: {
      front_default: obj.sprites.front_default,
      front_shiny: obj.sprites.front_shiny
    }
  }
  window.localStorage.setItem(n.name, JSON.stringify(n))
}

function nationalPokedex(obj){
  return(
    `<img src="${obj.sprites.front_default}" alt="${obj.name}" data-set="${obj.id}" class="library-pkm">`
  )
}

function registrarEquipo(poke) {
  if (poke.types.length < 2) {
    return (
      `<div class="pokemon_elegido" data-id="${poke.id}">
        <img src="${poke.sprites.front_default}" class="poke_img"></img>
        <div class="info_pokemon">
          <p><strong>Name:</strong> ${poke.name}</p>
          <p><span><strong>Type:</strong> ${poke.types[0].type.name}</span></p>
        </div>`
    )
  } else {
    return (
      `<div class="pokemon_elegido" data-id="${poke.id}">
        <img src="${poke.sprites.front_default}" class="poke_img"></img>
        <div class="info_pokemon">
          <p><strong>Name:</strong> ${poke.name}</p>
          <p><span><strong>Type:</strong> ${poke.types[0].type.name}</span> <br> <span><strong>Type:</strong> ${poke.types[1].type.name}</span></p>
        </div>`
    )
  }
}

function equipoIncompleto(poke){
  return(
    `<div class="modal-error">
      <h4>Debes tener 6 pokemones en tu equipo</h4>
      <figure>
      <img src="./img/pokeball.png" alt="" width="25px"></img>
      <img src="./img/pokeball.png" alt="" width="25px"></img>
      <img src="./img/pokeball.png" alt="" width="25px"></img>
      <img src="./img/pokeball.png" alt="" width="25px"></img>
      <img src="./img/pokeball.png" alt="" width="25px"></img>
      <img src="./img/pokeball.png" alt="" width="25px"></img>
      </figure>
      <h4>Tienes: ${poke.length}</h4>
    </div>`
  )
}

function catchPoke(obj) {
  if(obj.types.length < 2){
    return(
      `<div class="modal-info-card">
      <img src="${obj.sprites.front_default}" class="modal-info-img"></img>
      <div class="single-type">
        <p><strong>Type</strong>:${obj.types[0].type.name}</p>
      </div>
     </div>`
    )
  }else{
    return (
    `<div class="modal-info-card">
      <img src="${obj.sprites.front_default}" class="modal-info-img"></img>
      <div class="double-type">
        <p><strong>Type</strong>:${obj.types[0].type.name}</p>
        <p><strong>Type</strong>:${obj.types[1].type.name}</p>
      </div>
     </div>`
    )
  }
}

function registroPokemon() {
  $overlay.classList.add('active')
}

async function misty(dato) {
  $intel.blur()
  const a = await oak(dato)
  almacen(a)
  yaRegistrado(a)
  const string = catchPoke(a)
  const stringTitle = titulo(0)
  $info.innerHTML = string
  $titulo.innerHTML = stringTitle
  registroPokemon()
}

$intel.addEventListener('submit', async (event) => {
  event.preventDefault()
  try{
    const dato = new FormData($intel)
    const subaru = dato.get('name')
    await misty(subaru)
    $overlay.classList.add('active')
  }catch(error){
    alert(error.message)
  }
})

go.addEventListener('click', () =>{
  $national.classList.add('active')
  $library.style.animation = 'modalIn .8s'
})
$close.addEventListener('click', ()=>{
    $national.classList.remove('active')
    $library.style.animation = 'modalOut .8s forwards'
})
$national.addEventListener('click', (event)=>{
  if(event.target === $national){
    $national.classList.remove('active')
    $library.style.animation = 'modalOut .8s forwards'
  }
})

$poke.addEventListener('click', () => {
  if (usuario.length < 2) {
    const titu = titulo(2)
    $titulo.innerHTML = titu
    const equipoString = equipoIncompleto(usuario)
    $info.innerHTML = equipoString
    registroPokemon()
  } else {
    let equipo = usuario.slice(0,6)
    equipo.forEach((item) => {
      const pokeSTRING = registrarEquipo(item)
      const tem = createTemplate(pokeSTRING)
      $box.append(tem)
      $poke.addEventListener('click', () => {
        tem.classList.add('fadeIn')
      })
    })
  }
})

$bye.addEventListener('click', () => {
  $box.innerHTML = ''
})

$agree.addEventListener('click', () => {
  $overlay.classList.remove('active')
})

//quiza lo cambie o lo quite
$intel.addEventListener('focus', (event) =>{
  event.target.style.background = '#61dafb'
}, true)
$intel.addEventListener('blur', (event) =>{
  event.target.style.background = ''
}, true)

function click(elm){
  elm.addEventListener('mouseup', (event) =>{
    console.log(event)
  })
}

(async function createLibrary(){
  const series = 802
  for(let i = 1; i <= series; i++){
    const a = await whoIsPoke(i)
    const str = nationalPokedex(a)
    const tem = createTemplate(str)
    $library.append(tem)
    click(tem)
    tem.addEventListener('load', () => {
      tem.classList.add('fadeIn')
    })
  }
})()