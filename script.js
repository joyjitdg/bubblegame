var timer = 60;
var score = 0;
var hitrn = 0;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#getHit").textContent = hitrn;
}

function makeBubble(){
    let clutter="";
for(var i=1;i<=300;i++){
    var rn= Math.floor(Math.random()*10)
    clutter +=`<div class="bubble">${rn}</div>`
}
document.querySelector(".pbottom").innerHTML = clutter;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer --;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            document.querySelector(".pbottom").innerHTML = `<h1>Game Over</h1>`;
            clearInterval(timerInt);
        }
        
    },1000);
}

document.querySelector(".pbottom")
.addEventListener("click", function(dets){
    var clickNum = Number(dets.target.textContent);
    if(clickNum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

getNewHit();
runTimer();
makeBubble();
