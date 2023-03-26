var myPix = new Array("./images/dice1.png", "./images/dice2.png",
"./images/dice3.png", "./images/dice4.png", "./images/dice5.png",
"./images/dice6.png");

function play1(){
     randomNumber1 = Math.floor(Math.random() * myPix.length);
     document.querySelector(".img1").src = myPix[randomNumber1];
 }


function play2(){
    randomNumber2 = Math.floor(Math.random() * myPix.length);
    document.querySelector(".img2").src = myPix[randomNumber2];
   
   
    
        if  ( randomNumber1 > randomNumber2 ) {
            document.getElementById("result").innerHTML = "Player 1 wins"
        } else if ( randomNumber1 < randomNumber2 ) {
            document.getElementById("result").innerHTML = "Player 2 wins"
        } else  {
            document.getElementById("result").innerHTML = "draw!"
        };
        

}