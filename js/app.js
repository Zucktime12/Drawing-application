//problem no user interaction causes no change to application
// solution when user interacts cause changes appropriately
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;
//when clicking on control list
$(".controls").on("click", "li", function(){
   //deselect sibling elements
   $(this).siblings().removeClass("selected");
   //select clicked element
   $(this).addClass("selected");
   //cache current color
  color = $(this).css("background-color");
  
});

//when add color is pressed
$("#revealColorSelect").click(function(){
    //show color select or hide the color select
    changeColor();
    $("#colorSelect").toggle();
});

//update new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + ", " + b + ")");
}


//when color sliders change
$("input[type=range]").change(changeColor);
  

//when add color is pressed 
$("#addNewColor").click(function() {
  //append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //select new color
  $newColor.click();
});


//on mouse events on canvas 
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
   //draw lines
//can also be written document.getElementByTagName("canvas")[0]
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.strokeStyle = color;
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();  
    lastEvent = e;
  }  
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});
  

 
