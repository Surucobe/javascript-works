const $main = document.getElementById('main')
class player{
  constructor(id, up, down, left, right){
    this.id = id
    this.up = up
    this.down = down
    this.left = left
    this.right = right
    this.ejeX//posicion en eje X
    this.ejeY//posicion en eje Y
  }

  //metodos de movimiento
  movimiento(){
    console.log(`This is the player ${this.id}`)
  }

  window.addEventListener('keydown', (event) =>{
    if(event.keyCoe == this.up){
      console.log(`This is the player ${this.up} button`)
    }
  })
}

const playerOne = new player(1, 38, 40, 37, 39)

const playerTwo = new player(2, 87, 83, 65, 68)