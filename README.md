# PopUpFP

Interactive Quantified Student Notification 
Created in HTML/CSS/JS - by Manon Ykema



## Animations

#### Changing the "slide in" animation of the notification, when page is loaded. 
The ```document.addEventListener("DOMContentLoaded", function(){};``` ensures that the action written in this event is being displayed whenever the DOMContent (the initial HTML-page) is loaded. 

The element on which the animation is targeted, is called on with the ```document.getElementById("popup")``` code. In this case, the variable is named *elem*, short for element. 
Whenever the page loads, the starting position needs to diferentiate from the end point. Otherwise the element doesn't move. 
In this case, the starting position, also known as (aka) the variable *pos*, short for position, is -30. The unit of this number is later on defined. 

The ```clearInterval(id)``` cancels the action that was previously established, aka the position of the variable *elem*. The variable *id* sets the value inside ```clearInterval(id)``` to null. 

After that step, the id variable is changed with help of the ```setInterval(frame, 10)```. This function makes sure that the ```frame``` function is called every 10 milliseconds. If the goal is to change the speed, you now know how to do this.

In the ```function frame``` an if else statement is made. Every 10 seconds the interval checks if the *pos* variable is at 0. 
If this is not the case, the *pos* will add 10em on the right side of the element style. When the *pos* is equal to 0, the function stops. 

```
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
```
