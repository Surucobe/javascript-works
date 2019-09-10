const $top = document.getElementById('top')
const $hide = document.getElementById('hide')

class Player{
  constructor(id, up, down, left, right){
    this.id = id
    this.up = up
    this.down = down
    this.left = left
    this.right = right
  }
  
  movimiento(){
    document.body.innerHTML = `This are my keys \n\ ${this.down}, ${this.left}, ${this.right}, ${this.up}`
  }

  keys(){
  //new struggles
  }

  workinProgress(){
    alert(`is working cause ${this.up}!`)
  }
}

const playerOne = new Player(1, 38, 40, 37, 39)
$top.addEventListener('click', playerOne.workinProgress)