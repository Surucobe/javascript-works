const POKE_URL_REAL = 'https:pokeapi.co/api/v2/pokemon/'

let usuario = []
let intel

let x = 'armando'
x.toUpperCase()

 const go = document.getElementById('pokedex')
 const $poke = document.getElementById('poke_all')

//  function partner() {
//  }

async function whoIsPoke(i) {
  const brook = await fetch(`${POKE_URL_REAL}${i}`)
  const cook = await brook.json()
  let name = cook.name
  usuario.push(name)
  return name
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
  if (usuario.length < 5) {
    swal('','Tu equipo Pokemon debe contener 6 pokemones', 'error')
  }else{
    let a = usuario.slice(0,5)
    swal('' ,`${a}`, 'success')
  }
 })
  