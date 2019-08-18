class Permiso {
  constructor(id, license, name, apellido, fecha){
    this.id = id,
    this.license = license,
    this.name = name,
    this.apellido = apellido,
    this.fecha = fecha
  }

  crearPermiso(){
    $result.innerHTML = `${this.id}<br> ${this.license}<br> ${this.name}<br> ${this.apellido}<br> ${this.fecha}`
  }
}

const $form = document.getElementById('form')
const $result = document.getElementById('result')

$form.addEventListener('submit', (event)=>{
  event.preventDefault()
  const request = new FormData($form)
  let nombre = request.get('name')
  let license = request.get('license')
  let lastName = request.get('apellido')
  let id = request.get('id')
  let fecha = request.get('fecha')

  const user = new Permiso(id, license, nombre, lastName, fecha)
  user.crearPermiso()
})

function licensiaTemplate(){
  return(
    ``
  )
}