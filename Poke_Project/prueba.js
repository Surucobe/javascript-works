const POKE_URL_REAL = 'https:pokeapi.co/api/v2/pokemon/'
const mensaje = ['¡Felicidades!', 'Busca a tu pokemon <br> por nombre o ID', 'Error']
const usuario = []

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

function createTemplate(string, elm){
  const html = document.implementation.createHTMLDocument()
  html.body.innerHTML = string
  return elm.appendChild(html.body.children[0])
}

async function whoIsPoke(i) {
  const brook = await fetch(`${POKE_URL_REAL}${i}`)
  const cook = await brook.json()
  usuario.push(cook)
  return cook
}

function titulo(n){
  return(
    `<h1>${mensaje[n]}</h1>`
  )
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

async function misty(tag) {
  $intel.blur()
  const a = await whoIsPoke(tag)
  const string = catchPoke(a)
  const stringTitle = titulo(0)
  $info.innerHTML = string
  $titulo.innerHTML = stringTitle
  registroPokemon()
}

$intel.addEventListener('submit', async (event) => {
  event.preventDefault()

  const dato = new FormData($intel)
  const subaru = dato.get('name')
  misty(subaru)

  $overlay.classList.add('active')
})

// go.addEventListener('click', misty) // cambiar para quitar pokemon de la lista

$poke.addEventListener('click', () => {
  if (usuario.length < 2) {
    const u = titulo(2)
    // createTemplate(u, $titulo)
    $titulo.innerHTML = u
    const equipoString = equipoIncompleto(usuario)
    // createTemplate(equipoString, $info)
    $info.innerHTML = equipoString
    registroPokemon()
  } else {
    let equipo = usuario.slice(0,5)
    equipo.forEach((item) => {
      const pokeSTRING = registrarEquipo(item)
      createTemplate(pokeSTRING, $box)
    })
  }
})

$bye.addEventListener('click', () => {
  $box.innerHTML = ''
})

$agree.addEventListener('click', () => {
  $overlay.classList.remove('active')
})
