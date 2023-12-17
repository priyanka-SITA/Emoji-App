let emoji = document.querySelector(".emoji");
var colors = [
  "#FA8072",
  "#DFFF00",
  "#CCCCFF",
  "#00FFFF",
  "#800000",
  "#808000",
  "#800080",
  "#fcd44f",
];
var sad = document.querySelector(".sad");
var smile = document.querySelector(".smile");
var disappointed = document.querySelector(".disappointed");

var colorBtn = document.getElementById("color");
var smileBtn = document.getElementById("smile");
var sadBtn = document.getElementById("sad");
var disappointedBtn = document.getElementById("disappointed");

var colorCounter = 0;
var sadCounter = 0;
var smileCount = 0;

var totalCount = {
  sad: 4,
  smile: 2,
};

colorBtn.addEventListener("click", function () {
  emoji.style.backgroundColor = colors[colorCounter];
  colorCounter = colorCounter < colors.length - 1 ? colorCounter + 1 : 0;
});

smileBtn.addEventListener("click", function () {
  smile.style.display = "inline";
  sad.style.display = "none";
  disappointed.style.display = "none";
  smileCount = smileCount < totalCount.smile ? smileCount + 1 : 0;
});

sadBtn.addEventListener("click", function () {
  sad.style.display = "inline";
  disappointed.style.display = "none";
  smile.style.display = "none";
  sadCounter = sadCounter < totalCount.sad ? sadCounter + 1 : 0;
});

disappointedBtn.addEventListener("click", function () {
  disappointed.style.display = "inline";
  sad.style.display = "none";
  smile.style.display = "none";
});
