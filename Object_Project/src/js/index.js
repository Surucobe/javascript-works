class Permiso {
  constructor(id, license, name, apellido, fecha){
    this.id = id,
    this.license = license,
    this.name = name,
    this.apellido = apellido,
    this.fecha = fecha
  }

  crearPermiso(){
    console.log(`${this.id},<br> ${this.license}, ${this.name}, ${this.apellido}, ${this.fecha}`)
  }
}

const $form = document.getElementById('form')

$form.addEventListener('submit', async (event)=>{
  event.preventDefault()
  const request = new FormData($form)
  let nombre = request.get('name')
  let license = request.get('license')
  let lastName = request.get('apellido')
  let id = request.get('id')
  let fecha = request.get('fecha')

  const user = await new Permiso(id, license, nombre, lastName, fecha)
  user.crearPermiso()
  //console.log(user)
})