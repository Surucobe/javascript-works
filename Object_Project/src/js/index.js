const $main = document.getElementById('main')
class player{
  // constructor(id, ejeX){
  //   this.id = id
  //   this.ejeX = ejeX//posicion en eje X
  //   this.ejeY = ejeY//posicion en eje Y
  // }

  //metodos de movimiento
  //cambiando metodo
  movimiento(){
    window.addEventListener('keydown', (event) =>{
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
    })
  }
}

const playerOne = new player