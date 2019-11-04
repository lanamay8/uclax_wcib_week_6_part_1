window.onload = function () {
console.log('Hello from js/scripts.js!');

/* Looping through images */
var imageSet = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg']
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

for (let i = 0; i < imageSet.length; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', imageSet[i]);
  thumbBar.appendChild(newImage);
  newImage.onclick = function(e) {
    displayedImage.setAttribute('src', imageSet[i]);
  }
}

/* Wiring up the Darken/Lighten button */
var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
let darkness = false;
btn.addEventListener('click', darkLight);

function darkLight() {
  if (darkness === true) {
    darkness = false;
    btn.setAttribute('class', 'light');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.0)';
  } else {
    darkness = true;
    btn.setAttribute( 'class', 'dark' );
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,.5)';
  }
  }
  
}
