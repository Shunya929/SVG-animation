jQuery(function($){

  // let svgElement = document.querySelector('img');
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

  // let el = $(".c-pic2");
  //   el.onmousemove = function(event){
  //   event.offsetX;
  // };

  $(function() {
    var b = $('.c-pic2');
    console.log('コンテンツ本体：' + b.height() + '×' + b.width());
    console.log('内部余白込み：' + b.innerHeight() + '×' + b.innerWidth());
    console.log('枠線込み：' + b.outerHeight() + '×' + b.outerWidth());
    console.log('外部余白込み：' + b.outerHeight(true) + '×' + b.outerWidth(true));
  });

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

  // $(".c-pic2").on("mouseover",function() {
  //   $(".c-pic2").toggleClass("is-hover");
  //   console.log("jhgajga");
  //   });

   const box = $(".c-pic2")
  $(function () {
    box.hover(
    function () {
      $(this).css('opacity', '1');
    },
    function () {
      $(this).css('opacity', '0');
    }
  )

});
});
