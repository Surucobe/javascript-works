const POKE_URL_REAL = 'https:pokeapi.co/api/v2/pokemon/'

const usuario = []
let intel

const go = document.getElementById('pokedex')
const $poke = document.getElementById('poke_all')
const $box = document.getElementById('poke_box')
const $bye = document.getElementById('poke_bye')

async function whoIsPoke(i) {
  const brook = await fetch(`${POKE_URL_REAL}${i}`)
  const cook = await brook.json()
  // let name = cook.name
  usuario.push(cook)
  return cook
}

function registrarEquipo(poke) {
  if (poke.types.length < 2) {
    return (
      `<div class="pokemon_elegido">
        <img src="${poke.sprites.front_default}" class="poke_img"></img>
        <div class="info_pokemon">
          <p>Name: ${poke.name}</p>
          <p><span>Type: ${poke.types[0].type.name}</span></p>
        </div>`
    )
  } else {
    return (
      `<div class="pokemon_elegido">
        <img src="${poke.sprites.front_default}" class="poke_img"></img>
        <div class="info_pokemon">
          <p>Name: ${poke.name}</p>
          <p><span>Type: ${poke.types[0].type.name}</span> <br> <span>Type: ${poke.types[1].type.name}</span></p>
        </div>`
    )
  }
}

go.addEventListener('click', () => {
  async function misty() {
    intel = prompt('Elige a tu compañero')
    const a = await whoIsPoke(intel)
    swal(`Pokemon: ${a.name} \n\ ${a.abilities[0].ability.name}`)
  }
  misty()
})

$poke.addEventListener('click', () => {
  if (usuario.length < 1) {
    swal('', `Para este reto debes tener un equipo de 6 pokemon \n\ \n\ Tu equipo contiene: ${usuario.length} pokemones`, 'error')
  } else {
    usuario.forEach((item) => {
      const pokeSTRING = registrarEquipo(item)
      const html = document.implementation.createHTMLDocument()
      html.body.innerHTML = pokeSTRING
      $box.append(html.body.children[0])
    })
  }
})

$bye.addEventListener('click', () => {
  $box.innerHTML = ''
})