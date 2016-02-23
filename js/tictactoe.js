

$(function(){

  var moveCount = "sqr1"+"sqr2"+"sqr3"+"sqr4"+"sqr5"+"sqr6"+"sqr7"+"sqr8"+"sqr9";
sqr1 = 0
sqr2 = 0
sqr3 = 0
sqr4 = 0
sqr5 = 0
sqr6 = 0
sqr7 = 0
sqr8 = 0
sqr9 = 0

var boxes = document.getElementsByTagName("td");
var count = 1;
var  nextTurn = '.ff';
var winCounter = 0;
  $('table').click(function () {
    count += 1;

    if (count % 2) {
      count == 0;
    }
  });

function resetBoard(){
  for (var i = boxes.length - 1; i >= 0; i--) {
    boxes[i].innerHTML="";
    boxes[i].setAttribute("reset","clear");
  }

}
  $('#game').on('click',function(){
      var clear = $('.game').val();
      var total = count - parseInt(moveCount, 1);
      if ("x" == "You Win" ){
        (count = 1);
      } else{
       (count = 1);

      }
    })
// $("button").click(function(){
//     $("td").removeClass("x o");
// });

  //  $('reset'("game")).onClick(function (){
  //   var elem = document.getElementById("para1");
  //   elem.style.game = clear;
  // })


  $("#sqr1, #sqr2, #sqr3, #sqr4, #sqr5, #sqr6, #sqr7, #sqr8, #sqr9").click(function(){
    var cell = $(this);
      if (nextTurn == '.ff') {
        cell.css("background-image","url(images/freefall.png)")
        cell.addClass("x")
        nextTurn = '.ss';
      }
      else {
        cell.css("background-image","url(images/static-line.png)")
        cell.addClass("o")
        nextTurn = '.ff';
      }
    if (($('#sqr1').hasClass("x") && $('#sqr2').hasClass("x") && $('#sqr3').hasClass("x"))||($('#sqr4').hasClass("x") && $('#sqr5').hasClass("x") && $('#sqr6').hasClass("x"))||($('#sqr4').hasClass("x" ) && $('#sqr5').hasClass("x") && $('#sqr6').hasClass("x"))||($('#sqr7').hasClass("x" ) && $('#sqr8').hasClass("x") && $('#sqr9').hasClass("x"))||($('#sqr1').hasClass("x" ) && $('#sqr5').hasClass("x") && $('#sqr9').hasClass("x"))||($('#sqr3').hasClass("x" ) && $('#sqr5').hasClass("x") && $('#sqr7').hasClass("x"))||($('#sqr1').hasClass("x" ) && $('#sqr4').hasClass("x") && $('#sqr7').hasClass("x"))||($('#sqr2').hasClass("x" ) && $('#sqr5').hasClass("x") && $('#sqr8').hasClass("x"))||($('#sqr3').hasClass("x" ) && $('#sqr6').hasClass("x") && $('#sqr9').hasClass("x"))){

        alert("You Win!");
        x =+ 1;

    // } else if (($('#sqr1').hasClass("o") && $('#sqr2').hasClass("o") && $('#sqr3').hasClass("o"))||($('#sqr4').hasClass("o") && $('#sqr5').hasClass("o") && $('#sqr6').hasClass("o"))||($('#sqr4').hasClass("o" ) && $('#sqr5').hasClass("o") && $('#sqr6').hasClass("o"))||($('#sqr7').hasClass("o" ) && $('#sqr8').hasClass("o") && $('#sqr9').hasClass("o"))||($('#sqr1').hasClass("o" ) && $('#sqr5').hasClass("o") && $('#sqr9').hasClass("o"))||($('#sqr3').hasClass("o" ) && $('#sqr5').hasClass("o") && $('#sqr7').hasClass("o"))||($('#sqr1').hasClass("o" ) && $('#sqr4').hasClass("o") && $('#sqr7').hasClass("o"))||($('#sqr2').hasClass("o" ) && $('#sqr5').hasClass("o") && $('#sqr8').hasClass("o"))||($('#sqr3').hasClass("o" ) && $('#sqr6').hasClass("o") && $('#sqr9').hasClass("o"))){

    //     alert("You Win!");
    //     o =+ 1;

     // } else
     //  (count == 9)
     //    alert("Draw");
      }
  //     }else  ($(this).hasClass('disable'))
  // {
  //   alert('Already selected')
  // }
  })

  // $("#reset td").click(function () {
  // $("#game td").removeClass('disable')
  // $("#game td").removeClass('o')
  // $("#game td").removeClass('x')
  // count = 0

  // });

})



