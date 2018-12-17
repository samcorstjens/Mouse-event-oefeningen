
//oefening1

function onzichtbaar(x){
  x.style.visibility = "hidden";
}



//oefening2
var divlijst = document.getElementsByClassName("hoverMe");
function zichtbaar(){
  for (i=0;i<divlijst.length;i++){
  divlijst[i].style.visibility = "visible";
}
}
// oefening 3


function venster(event){
  var itemX = document.getElementById("x-axis");
  var itemY = document.getElementById("y-axis");
var xco = event.pageX;
var yco = event.pageY;
var xzin = "<p>De X coordinaten : " + xco + " </p>";
var yzin = "<p>De Y coordinaten : " + yco + " </p>";
itemX.innerHTML = xzin;
itemY.innerHTML = yzin;
}
