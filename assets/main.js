$(document).ready(function() {

  console.log('main.js is linked');

  // THIS CREATES THE CANVAS PIXELS //

  for (let i = 0; i < 1953; i++) {
    const canvas = document.querySelector('.canvas')
    let pixel = document.createElement('div')
    pixel.className = 'pixel'
    canvas.appendChild(pixel)
  }




  // COLOR PICKER EVENT HANDLE //

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


  // CANVAS EVENT HANDLE //

  const canvas = document.querySelector('.canvas')

  canvas.addEventListener('click', function() {

    let pixel = event.target
    pixel.setAttribute('id', currentColor)
  })


  // CLICK AND PAINT FUNCTION //



  function paint() {
    console.log('paint is running');

    let mouseState = false


    $('.canvas').mousedown(function() {
      mouseState = true
    })

    $('.canvas').mouseup(function() {
      mouseState = false
    })
    $('.pixel').mouseover(function() {
      if (mouseState) {
        $(this).attr('id', currentColor)
      }
    })

    // canvas.addEventListener('mousedown', function() {
    //   console.log('mouseDOWN');
    //   mouseState = true
    //   console.log('mouseState: ', mouseState);
    // })
    //
    // canvas.addEventListener('mouseup', function() {
    //   console.log('mouseUP');
    //   mouseState = false
    //
    // })
    //
    // while (mouseState === true) {
    //   console.log('mouseState if Satement = ', mouseState);
    //   let pixels = document.querySelector('.pixel')
    //   console.log('pixels: ', pixels);
    //   pixels.addEventListener('hover', function() {
    //
    //     let pixel = event.target
    //     console.log('pixel = ', pixel);
    //     pixel.setAttribute('id', currentColor)
    // }

  } // paint() closing bracket



  paint()


}) // document ready closing bracket
