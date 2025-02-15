/****
 *
 * Confeti
 *
 *
 */
//source https://confetti.js.org/more.html
const duration = 3 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);

/*
 *
 *
 * Esfera
 *
 *
 */


var t = 1;
var radius = 100;
var squareSize = 13;
var prec = 19.55;
var fuzzy = 0.001;
var inc = (Math.PI-fuzzy)/prec;
var discoBall = document.getElementById("discoBall");

for(var t=fuzzy; t<Math.PI; t+=inc) {
  var z = radius * Math.cos(t);
  var currentRadius = Math.abs((radius * Math.cos(0) * Math.sin(t)) - (radius * Math.cos(Math.PI) * Math.sin(t))) / 2.5;
  var circumference = Math.abs(2 * Math.PI * currentRadius);
  var squaresThatFit = Math.floor(circumference / squareSize);
  var angleInc = (Math.PI*2-fuzzy) / squaresThatFit;
  for(var i=angleInc/2+fuzzy; i<(Math.PI*2); i+=angleInc) {
    var square = document.createElement("div");
    var squareTile = document.createElement("div");
    squareTile.style.width = squareSize + "px";
    squareTile.style.height = squareSize + "px";
    squareTile.style.transformOrigin = "0 0 0";
    squareTile.style.webkitTransformOrigin = "0 0 0";
    squareTile.style.webkitTransform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
    squareTile.style.transform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
    if((t>1.3 && t<1.9) || (t<-1.3 && t>-1.9)) {
      squareTile.style.backgroundColor = randomColor("bright");
    } else {
      squareTile.style.backgroundColor = randomColor("any");
    }
    square.appendChild(squareTile);
    square.className = "square";
    squareTile.style.webkitAnimation = "reflect 2s linear infinite";
    squareTile.style.webkitAnimationDelay = String(randomNumber(0,20)/10) + "s";
    squareTile.style.animation = "reflect 2s linear infinite";
    squareTile.style.animationDelay = String(randomNumber(0,20)/10) + "s";
    squareTile.style.backfaceVisibility = "hidden";
    var x = radius * Math.cos(i) * Math.sin(t);
    var y = radius * Math.sin(i) * Math.sin(t);
    square.style.webkitTransform = "translateX(" + Math.ceil(x) + "px) translateY(" + y + "px) translateZ(" + z + "px)";
    square.style.transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)";
    discoBall.appendChild(square);
  }
}

function randomColor(type) {
  var c;
  if(type == "bright") {
    c = randomNumber(130, 255);
  } else {
    c = randomNumber(110, 190);
  }
  return "rgb(" + c + "," + c + "," + c + ")";
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("pinterest_70").addEventListener('click', function(event){
    window.open("https://co.pinterest.com/jhernndezserrato/outfits-70s/","_blank");
});
