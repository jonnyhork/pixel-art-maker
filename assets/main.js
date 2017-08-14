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

    const selectedColor = event.target.getAttribute('id')
    currentColor = selectedColor
    brushColor.setAttribute('id', currentColor)


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

    // THIS IS THE VANILLA JS METHOD //

    // let pixels = document.querySelector('.pixel')
    // console.log('pixels = ', pixels);
    // console.log('this is: ', this);
    //
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
    // canvas.addEventListener('mouseover', function() {
    //   let pixel = event.target
    //   if (mouseState) {
    //     console.log('event target: ', pixel);
    //     pixel.setAttribute('id', currentColor)
    //   }
    // })

  } // paint() closing bracket
  paint()

  // CUSTOM COLOR //

  // let customColor = document.getElementById('custom-color')
  //
  // customColor.addEventListener('change', function() {
  //   console.log('customColor is: ', customColor.value);
  //   document.stylesheet.insertRule() = customColor.value
  //   console.log(' currentColor is:', currentColor);
  //
  // })

  // look at window.getcomputedstyle


}) // document ready closing bracket
