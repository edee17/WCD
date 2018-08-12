// Get the modal
var modal = document.getElementById('mySlideshow');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('aImage');
var img2 = document.getElementById('aImage2');
var img3 = document.getElementById('aImage3');
var img4 = document.getElementById('aImage4');
var img5 = document.getElementById('aImage5');
var img6 = document.getElementById('aImage6');

var modalImg = document.getElementById("aImage1");
var modalImg2 = document.getElementById("aImage2");
var modalImg3 = document.getElementById("aImage3");
var modalImg4 = document.getElementById("aImage4");
var modalImg5 = document.getElementById("aImage5");
var modalImg6 = document.getElementById("aImage6");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
img3.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
img4.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
img5.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
img6.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}