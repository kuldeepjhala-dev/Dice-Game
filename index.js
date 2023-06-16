randomNo1 = Math.floor((Math.random() * 6) + 1);
randomNo2 = Math.floor((Math.random() * 6) + 1);

if(randomNo1 > randomNo2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins ";
} else if(randomNo2 > randomNo1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNo1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNo2 + ".png");
