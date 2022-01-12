document.addEventListener("DOMContentLoaded", function(){
    var id = null;
    var elem = document.getElementById("popup");   
    var pos = -30;
  
    clearInterval(id);
    id = setInterval(frame, 10);

  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.right = pos + 'em'; 
    }
  }
}); 

// var closePopUp = document.getElementsByClassName("closeBtn"); 

var popUp = document.getElementById("popup"); 
var closePopUp = document.getElementsByClassName("closeBtn");

var myFunction = function() {

    // Small Test to see if attribute called 

    // var attribute = this.getAttribute("data-myattribute");
    // alert(attribute);

    popUp.style.display="none"; 

};

for (var i = 0; i < closePopUp.length; i++) {
    closePopUp[i].addEventListener('click', myFunction, false);
}