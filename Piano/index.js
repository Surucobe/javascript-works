//Variable to work with the elements render ahead, may replaced the way to do this
let test = 1;
//Used querySelectorAll to get all the elements with a ".key" class
const keys = document.querySelectorAll('.key');
//Const to get the container for the renderNote function
const $history = document.getElementById('history')

//Iterate through every key inside the array to add an event listener along with the function
keys.forEach(key => {
  key.addEventListener('click', () => playNote(key));
})

//Event listener for the the keyboard
window.addEventListener('keydown', e => {
  //Prevents repetion of the event by holding the key
  if (e.repeat) return
  //Takes the event and search for the audio suing the event and the dataset property
  let audio = document.querySelector(`audio[data-sound="${e.keyCode}"]`);
  //In case there's no audio the function will return and end right away
  if (!audio) return;

  //Better explain ahead
  audio.currentTime = 0;
  audio.play();

  renderNote(audio.id);
})

//Function to play the audio by clicking
function playNote(key) {
  //Get the key using the data set in order for it to play
  const audio = document.getElementById(key.dataset.key);
  //Prevents the audio from going on and on by reseting the audio time to 0 and then playing from the beginning
  audio.currentTime = 0;
  //Adds a class to the key to highlight the key we just played
  audio.classList.add('active')
  //Plays the audio
  audio.play();
  //With this listener the function will fire off as soon as the audio finishes
  audio.addEventListener('ended', () => {
    audio.classList.remove('active');
  })
  renderNote(key.dataset.key);
}

//Function to render inside the history container the note that was just played
function renderNote(note) {
  if ($history.childNodes.length > 35) {
    $history.removeChild($history.childNodes[0]);
  }
  //condition to iterate the classes
  if (test > 3) {
    test = 1;
  }
  //Creating a html element
  const tag = document.createElement('li');
  //Add class and the name of the class
  tag.setAttribute(`class`, `note_${test}`);
  //Filling the text inside the tag
  tag.textContent = note;

  test++;
  //Append the element inside the history container
  $history.append(tag);
}