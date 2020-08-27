const $piano = document.getElementById('piano');

//keyboard listener function, will be added onto the window object so it it triggers every time we hit a certain key
//still need to add a way to stop the sounds after... or maybe not
function tileKeySound(e) {
  const $audio = document.querySelector(`audio[data-sound="${e.keyCode}"]`);

  if (!$audio) return;

  $audio.currentTime = 0;
  $audio.play();
}

window.addEventListener('keyup', tileKeySound);

//function to make the piano work with the mouse, won't make it into a lone function cause there is no point 
//(it was tricky you should feel proud of yourself :3)
$piano.addEventListener('click', (e) => {
  console.log(e.target);
  const $audio = document.querySelector(`audio[data-sound="${e.path[0].attributes[1].value}"]`);

  if (!$audio) return;

  $audio.currentTime = 0;
  $audio.play();
})