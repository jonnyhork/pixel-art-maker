$(document).ready(function(){

  console.log('main.js is linked');

  // makePixelGrid(50)
for (let i = 0; i < 1953; i++){
  let canvas = document.getElementById('canvas')
  let pixel = document.createElement('div')
    pixel.className = 'pixel'
    canvas.appendChild(pixel)

}

})


// function makePixelGrid(number){
//  for (var i = 0; i<= number*number; i++){
//    $('.pixel-grid').append('<div class = "pixel"></div>')
//  }
//   $('.pixel').height($('.pixel-grid').height()/number)
//   $('.pixel').width($('.pixel-grid').width()/number)
//
// }
