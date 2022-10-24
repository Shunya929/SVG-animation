// /*
//  * Noel Delgado | @pixelia_me
//  *
// */

// let svgElement = document.querySelector('svg');
// let maskedElement = document.querySelector('#mask-circle');
// let circleFeedback = document.querySelector('#circle-shadow');
// let svgPoint = svgElement.createSVGPoint();

// function cursorPoint(e, svg) {
//     svgPoint.x = e.clientX;
//     svgPoint.y = e.clientY;
//     return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
// }

// function update(svgCoords) {
//     maskedElement.setAttribute('cx', svgCoords.x);
//     maskedElement.setAttribute('cy', svgCoords.y);
//     circleFeedback.setAttribute('cx', svgCoords.x);
//     circleFeedback.setAttribute('cy', svgCoords.y);
// }

// window.addEventListener('mousemove', function(e) {
//   update(cursorPoint(e, svgElement));
// }, false);

// document.addEventListener('touchmove', function(e) {
//     e.preventDefault();
//     var touch = e.targetTouches[0];
//     if (touch) {
//         update(cursorPoint(touch, svgElement));
//     }
// }, false);

let
cursor = $(".cursor"),
cWidth = 20, //カーソルの大きさ
mouseX = 0, //マウスのX座標
mouseY = 0; //マウスのY座標

$(document).on('mousemove', function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  cursor.css({
    //カーソルの真ん中に座標軸が来るよう、
    //カーソルの大きさの半分を引きます
    left: mouseX - (cWidth / 2),
    top: mouseY - (cWidth / 2)
  })
});
