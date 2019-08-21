class player{
  constructor(id, ejeX){
    this.id = id
    this.ejeX = ejeX//posicion en eje X
    this.ejeY = ejeY//posicion en eje Y
  }

  //metodos de movimiento
  //cambiando metodo
  movimiento(){
    window.addEventListener('keydown', (event) =>{
      switch(event){
        case event.keyCode == '39':
          return this.ejeX + 10
        case event.keyCode == '37':
          return this.ejeX - 10
        case event.keyCode == '40':
          return this.ejeY - 10
        case event.keyCode == '38':
          return this.ejeY + 10
      }
    })
  }
}


const $main = document.getElementById('main')