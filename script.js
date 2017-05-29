document.querySelector('h1').style.color = "blue";

document.getElementById("nickname").innerHTML = "AJ";
document.getElementById("favorites").innerHTML = "Biking, dogs, coconut milk ice cream";
document.getElementById("hometown").innerHTML = "Kansas City";

document.querySelector('body').style.background = "red";
document.querySelector('body').style.fontFamily = "sans-serif"; 

// iterate through list

var ul = document.querySelector('ul');
var li = ul.getElementsByTagName('li');

for (var i = 0; i < li.length; i++) {
	li[i].className = "listitem";
	li[i].style.backgroundColor = "white";
	li[i].style.color = "red";
}


// image

var ajImage = document.createElement('img');
ajImage.setAttribute("src", "AJ_photo.jpg");
ajImage.setAttribute("height", "200px");
ajImage.setAttribute("width", "200px");
document.querySelector('h1').appendChild(ajImage);
