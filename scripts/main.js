
var myHeading = document.querySelector('h3');
myHeading.textContent = 'Ludzki organizm';


var myImage = document.querySelector('img');
myImage.onclick = function() {
 var mySrc = myImage.getAttribute('src');
 if(mySrc === 'images/Dna.jpg') {
 myImage.setAttribute ('src','images/chromosom.jpg');
 } else {
 myImage.setAttribute ('src','images/Dna.jpg');
 }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() {
 var myName = prompt('Please, enter your name');
 localStorage.setItem('name', myName);
 myHeading.textContent = 'Witaj serdecznie,  ' + myName;
}

if(!localStorage.getItem('name')) {
 setUserName();
} else {
 var storedName = localStorage.getItem('name');
 myHeading.textContent = 'Witaj serdecznie ' + storedName;
}
myButton.onclick = function() {
 setUserName();
}