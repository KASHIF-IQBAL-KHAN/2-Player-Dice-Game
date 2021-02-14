var randomNumber1=Math.floor(Math.random()*6)+1; //First Dice
var randomNumber2=Math.floor(Math.random()*6)+1;  //Second Dice
var image1="images/dice"+randomNumber1+".png";//First Dice
var image2="images/dice"+randomNumber2+".png";  //Second Dice
document.querySelectorAll("img")[0].setAttribute("src",image1);
document.querySelectorAll("img")[1].setAttribute("src",image2);

if(randomNumber1>randomNumber2)
document.querySelector("h2").innerHTML="Player1  Wins🎉";
else if(randomNumber1<randomNumber2)
document.querySelector("h2").innerHTML="Player2 Wins🎉";
else
document.querySelector("h2").innerHTML="Draw! Try Again.";
