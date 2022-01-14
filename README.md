# Feedpulse Notification

Project : Quantified Student Notification 
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

```js
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

#### Changing the Wave Emoji Animation

The waving emoji is created with the help of CSS keyframes. In the HTML a span is created; 
```html
<span class="wave-emoji">👋</span>
``` 
The span is given an class named *wave-emoji*. If, in the future the same keyframe animation needs to be used again on the same page, the class can be simply re-used.
In the CSS the HTML-class is addresses, hereby defining the different properties of the wave emoji in the pop-up. 

The ```animation-name: wave-animation``` is called. 
This makes sure that the animation links to the keyframes named wave-animation. 
After repeating the animation three times, the animation stops playing. This is due to the ```animation-iteration-count: 3;```.

Keyframes are speaking for themselves. The animation-duration is 2,5s, at the point when the animation ends it's 100% completed. 
That 100% can be divided into sections, which creates interactivity whenever the animation-duration is playing. 
To change the rotation of the waving hand, adjust the percentages displayed under the keyframes. 

Transform-origin creates an anchor point for the element. The first 70% stands for the x-pos., and the second one for the y-pos.. 

```css 
#popup .wave-emoji {
    animation-name: wave-animation;  
    animation-duration: 2.5s;        
    animation-iteration-count: 3;  
    transform-origin: 70% 70%;       
    display: inline-block;
  }
  
@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) } 
  100% { transform: rotate( 0.0deg) }
}
```
