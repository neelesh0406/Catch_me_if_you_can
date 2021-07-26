var box = document.getElementById('box');

// Width and Height of viewport in which the box is restricted
var viewWidth = window.innerWidth;
var viewHeight = window.innerHeight;

// Setting the width and height of the box according to viewport 
box.style.width = Math.floor(0.1 * viewWidth) + 'px';
box.style.height = Math.floor(0.15 * viewHeight) + 'px';

// This is the maximum value of top and left in integers that ball can go 
var maxWidth = viewWidth - parseInt(box.style.width) ;
var maxHeight = viewHeight - parseInt(box.style.height) ;

// setting the initial value of box to center on the page
box.style.top = Math.floor(.5 * maxHeight) + 'px';
box.style.left = Math.floor(.5 * maxWidth) + 'px';

// This is for setting the top and left values of box according to viewport using random()
box.addEventListener('mouseover', function(){
    box.style.top = Math.floor(Math.random() * maxHeight) + 'px';
    box.style.left = Math.floor(Math.random() * maxWidth) + 'px';
})