// document.getElementById("img1").addEventListener("click",showpopof);
// var a=0
// function showpopof(){
// if(a==1){
//     document.getElementById("container").style.display="inline"
//     return a=0
// }
// else{
//     document.getElementById("container").style.display="none"
//     return a=1;
// }
// }
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar;

import footer from"../footer.js"
document.getElementById("footer").innerHTML=footer();

var modal = document.getElementById("container");

// Get the button that opens the modal
var btn = document.getElementById("img1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
