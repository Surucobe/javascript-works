class Permiso {
  constructor(id, license, name, apellido, fecha){
    this.id = id,
    this.license = license,
    this.name = name,
    this.apellido = apellido,
    this.fecha = fecha
  }
}
const $form = document.getElementById('form')

$form.addEventListener('submit', (event)=>{
  event.preventDefault()
  debugger
  const request = new FormData($form)
  let nombre = request.get('name')
  console.log(nombre)
})