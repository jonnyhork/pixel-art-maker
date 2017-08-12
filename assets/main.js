$(document).ready(function(){

  console.log('main.js is linked');

  // THIS CREATES THE CANVAS PIXELS
for (let i = 0; i < 1953; i++){
  let canvas = document.getElementById('canvas')
  let pixel = document.createElement('div')
    pixel.className = 'pixel'
    canvas.appendChild(pixel)
}

// COLOR PICKER EVENT HANDLE
let currentColor

const colorPalette = document.getElementById('color-select')

colorPalette.addEventListener('click', function(){
    console.log(this);
  const selectedColor = event.target.getAttribute('id')
  currentColor = selectedColor
    console.log('The event.target color id:', selectedColor);
    console.log('The currentColor is: ', currentColor);
})







// CANVAS EVENT HANDLE
const canvas = document.getElementById('canvas')

canvas.addEventListener('click', function(){


})





})
