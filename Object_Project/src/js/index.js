const $main = document.getElementById('main')
class player{
  constructor(id){
    this.id = id
    this.ejeX//posicion en eje X
    this.ejeY//posicion en eje Y
  }

  //metodos de movimiento
  //cambiando metodo
  movimiento(event){
    let codeNme = event.keyCode
    switch (codeNme) {
      // return this.ejeX + 10 derecha
      case codeNme = 39:
        return alert('derecha')
        // return this.ejeX - 10 izquierda
      case codeNme = 37:
        return alert('izquierda')
        // return this.ejeY - 10 abajo
      case codeNme = 40:
        return alert('abajo')
        // return this.ejeY + 10 arriba
      case codeNme = 38:
        return alert('arriba')
    }

    $main.addEventListener('keydown', (event) =>{
      this.movimiento(event)
    })
  }
}

const playerOne = new player($main)