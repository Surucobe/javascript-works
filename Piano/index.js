const test = document.getElementById('test')

window.addEventListener('keyup', (event) =>{
  if(event.keyCode == 65){
    test.play()
  }
})