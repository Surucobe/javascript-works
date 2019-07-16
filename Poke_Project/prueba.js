const POKE_URL_REAL = 'https:pokeapi.co/api/v2/pokemon/'

const usuario = []
let intel

const go = document.getElementById('pokedex')
const $poke = document.getElementById('poke_all')
const $box = document.getElementById('poke_box')
const $bye = document.getElementById('poke_bye')
const $agree = document.getElementById('agree')
const $overlay = document.getElementById('overlay')
const $modal = document.getElementById('modal')
const $info = document.getElementById('info')

function createTemplate(string, elm){
  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = string
  return elm.append(html.body.children[0])
}

function clean() {
  setTimeout(() => {
    $info.innerHTML = ''
  }, 1000);
}

async function whoIsPoke(i) {
  const brook = await fetch(`${POKE_URL_REAL}${i}`)
  const cook = await brook.json()
  usuario.push(cook)
  return cook
}

function registrarEquipo(poke) {
  if (poke.types.length < 2) {
    return (
      `<div class="pokemon_elegido">
        <img src="${poke.sprites.front_default}" class="poke_img"></img>
        <div class="info_pokemon">
          <p><strong>Name:</strong> ${poke.name}</p>
          <p><span><strong>Type:</strong> ${poke.types[0].type.name}</span></p>
        </div>`
    )
  } else {
    return (
      `<div class="pokemon_elegido">
        <img src="${poke.sprites.front_default}" class="poke_img"></img>
        <div class="info_pokemon">
          <p><strong>Name:</strong> ${poke.name}</p>
          <p><span><strong>Type:</strong> ${poke.types[0].type.name}</span> <br> <span><strong>Type</strong>: ${poke.types[1].type.name}</span></p>
        </div>`
    )
  }
}

function catchPoke(obj) {
  // debugger
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
      <div>
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

go.addEventListener('click', () => {
  async function misty() {
    intel = prompt('Elige a tu compañero')
    const a = await whoIsPoke(intel)
    const string = catchPoke(a)
    createTemplate(string, $info)
    registroPokemon()
  }
  misty()
})

$poke.addEventListener('click', () => {
  if (usuario.length < 1) {
    swal('', `Para este reto debes tener un equipo de 6 pokemon \n\ \n\ Tu equipo contiene: ${usuario.length} pokemones`, 'error')
  } else {
    usuario.forEach((item) => {
      const pokeSTRING = registrarEquipo(item)
      createTemplate(pokeSTRING, $box)
    })
  }
})

$bye.addEventListener('click', () => {
  $box.innerHTML = ''
})

$agree.addEventListener('click', () =>{
  $overlay.classList.remove('active')
  clean()
})