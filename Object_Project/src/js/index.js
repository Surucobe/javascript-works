const $main = document.getElementById('main')
const $hide = document.getElementById('hide')
const $overlay = document.getElementById('overlay')
const $formas = overlay.querySelectorAll('div')
class Player{
  constructor(id, up, down, left, right){
    this.id = id
    this.up = up
    this.down = down
    this.left = left
    this.right = right
  }
  
  //metodos de movimiento
  movimiento(){
    console.log(`This are my keys \n\ ${this.down}, ${this.left}, ${this.right}, ${this.up}`)
  }
}

$hide.addEventListener('click', ()=>{
  alert('I Exist!')
});

(function gaming(){
  playerOne = new Player(1, 38, 40, 37, 39)
})()