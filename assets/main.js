$(document).ready(function() {

  console.log('main.js is linked');

  // THIS CREATES THE CANVAS PIXELS
  for (let i = 0; i < 1953; i++) {
    const canvas = document.querySelector('.canvas')
    let pixel = document.createElement('div')
    pixel.className = 'pixel'
    canvas.appendChild(pixel)
  }

  // COLOR PICKER EVENT HANDLE
  let currentColor
  let brushColor = document.querySelector('.current-color')

  const colorSelect = document.querySelector('.color-select')

  colorSelect.addEventListener('click', function() {
    // console.log(this);
    const selectedColor = event.target.getAttribute('id')
    currentColor = selectedColor
    brushColor.setAttribute('id', currentColor)

    // console.log('The event.target color id:', selectedColor);
    // console.log('The currentColor is: ', currentColor);
  })


  // CANVAS EVENT HANDLE
  const canvas = document.querySelector('.canvas')

  canvas.addEventListener('click', function() {

    let pixel = event.target
    pixel.setAttribute('id', currentColor)
  })





})

// brushColor.setAttribute('id', currentColor)
// brushColor.style.cssText()
