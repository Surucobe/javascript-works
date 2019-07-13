const POKE_URL_REAL = 'https:pokeapi.co/api/v2/pokemon/'

const usuario = []
let intel

 const go = document.getElementById('pokedex')
 const $poke = document.getElementById('poke_all')
 const $box = document.getElementById('poke_box')

async function whoIsPoke(i) {
  const brook = await fetch(`${POKE_URL_REAL}${i}`)
  const cook = await brook.json()
  let name = cook.name
  usuario.push(cook)
  return name
}

function registrarEquipo(poke) {
  if(poke.types.length < 2){
    return (
      `<div class="pokemon_elegido">
        <img src="${poke.sprites.front_default}" class="poke_img"></img>
        <div class="info_pokemon">
          <p>Name: ${poke.name}</p>
          <p><span>Type: ${poke.types[0].type.name}</span></p>
        </div>`
    )
  }else{
    return(
      `<div class="pokemon_elegido">
        <img src="${poke.sprites.front_default}" class="poke_img"></img>
        <div class="info_pokemon">
          <p>Name: ${poke.name}</p>
          <p><span>Type: ${poke.types[0].type.name}</span> <br> <span>Type: ${poke.types[1].type.name}</span></p>
        </div>`
    )
  }
}

 go.addEventListener('click', () =>{
   async function misty(){
    intel = prompt('Elige a tu compañero')
    const a = await whoIsPoke(intel)
    swal(`Pokemon: ${a}`)
   }
   misty()
 })

 $poke.addEventListener('click', () =>{
 if(usuario.length < 6){
   swal('', `Para este reto debes tener un equipo de 6 pokemon \n\ \n\ Tu equipo contiene: ${usuario.length} pokemones`,'error')
 }else{
   usuario.forEach((item) => {
    const pokeSTRING = registrarEquipo(item)
    const html = document.implementation.createHTMLDocument()
    html.body.innerHTML = pokeSTRING
    $box.append(html.body.children[0])
  })
 }
  
  // if (usuario.length < 1) {
  //   swal('',`Tu equipo Pokemon debe contener 6 pokemones \n\ Pokemones faltantes: ${6 - usuario.length}`, 'error')
  // }else{
  //   let a = usuario.slice(0,5)
  //   a.forEach(i => {
  //     if (i.types.length < 2){
  //       console.log(`Name: ${i.name} \n\ Type: ${i.types[0].type.name}`)
  //     }else{
  //       console.log(`Name: ${i.name} \n\Type: ${i.types[0].type.name} / ${i.types[1].type.name}`)
  //     }
  //   });
  // }
 })
  