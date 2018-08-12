var smallsize = document.querySelector(".smaller-size");
var defaultsize = document.querySelector(".selected-button");
var largesize = document.querySelector(".larger-size");
var text = document.querySelector("html");
var font = document.querySelector("fontsize");

function smaller(){
  smallsize.className = "smaller-size, selected-button";
  text.className = "html, smaller-size";
  defaultsize.className = "selected-button, html";
  largesize.className = "larger-size, larger-size";
}

function normal(){
  defaultsize.className = "selected-button, selected-button";
  text.className = "html, selected-button";
  smallsize.className = "smaller-size, smaller-size";
  largesize.className = "larger-size, larger-size";
}

function larger(){
  largesize.className = "larger-size, selected-button";
  text.className = "html, larger-size"
  defaultsize.className = "selected-button, html";
  smallsize.className = "smaller-size, smaller-size";
}

smallsize.addEventListener("click", smaller,);
defaultsize.addEventListener("click", normal);
largesize.addEventListener("click", larger);