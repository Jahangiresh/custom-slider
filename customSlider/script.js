var slider = document.querySelector(".slider");
var img = document.querySelector(".slider img");
var right = document.querySelector(".right");
var left = document.querySelector(".left");
var dots = document.querySelectorAll(".dot");

var images = [
  "https://wowslider.com/sliders/demo-5/data/images/sweden.jpg",
  "https://wowslider.com/sliders/demo-91/data1/images/stream384655_1280.jpg",
  "https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp",
];

var index = 0;

right.addEventListener("click", function () {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  img.src = images[index];
  var el = dots[0];
  while (el) {
    if (el.tagName === "DIV") {
      el.classList.remove("active");
    }
    el = el.nextElementSibling;
  }
  dots[index].classList.add("active");

  for (let j = 0; j < dots.length; j++) {}
});

left.addEventListener("click", function () {
  index--;
  if (index === -1) {
    index = images.length - 1;
  }
  img.src = images[index];
});
