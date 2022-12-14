//x et y - les coordonnées de la ball dans l'axe vertical et horisontal
let x,y

//c'est notre ball - champignon
let heroBall

// mouvement de la ball xSpeed: +1 il vas à droite et -1 à gauhce
let xSpeed = Math.round(Math.random())
if (xSpeed==0) xSpeed = -1

// mouvement de la ball ySpeed +1 mouvement vers le haut, -1 mouvement vers le bas
let ySpeed = Math.random()/2

//les viteses de nos 2 plateforms(dino)
let player1Speed = 0, player2Speed = 0

//c'est nos 2 plateforms avec qui on joue
let player1, player2

//les height-- hauteus de nos plateforms
let player1y, player2y

//count of goal
let count1, count2

//с'st le W-width et H-height de notre écran = body
var W = document.activeElement.clientWidth
var H = document.activeElement.clientHeight
console.log(H/2)
console.log(W/2)


// fonction ''DOMContentLoadedse'' se lance  - en demarage de la page
addEventListener('DOMContentLoaded', () => {
    console.log('zapusk stranici')
    
    //teleport la ball au centre de l'écran
    heroBall = document.querySelector('.heroBall')
    heroBall.style.left = W/2 + 15 + 'px'
    heroBall.style.top = H/2 + 15 + 'px'

    player1 = document.getElementsByClassName("player1")[0]
    player2 = document.querySelector('.player2')

    //positionnement des nos 2 jouers - plateforms + et - px c'est la moitié de width/height de plateform
    player1y = H/2 - 125
    player1.style.top = player1y 

    player2y = H/2 - 125
    player2.style.top = player2y
    player2.style.left = W -70

    x = W/2 - 25 
    y = H/2 - 25

    addEventListener("keydown", changeSpeed)
    setInterval(move,1)

    
})



function changeSpeed(e){
    switch(e.code){
        case "KeyW": player2Speed = -1; break;
        case "KeyS": player2Speed = 1; break;
        case "ArrowUp": player1Speed = -1; break;
        case "ArrowDown": player1Speed = 1; break;
    }
}



function loose(n){
    xSpeed *= -1
    ySpeed = Math.random()/2
    x = W/2
    y = H/2
//     if (n==1) count1.innerHTML = parseInt(count1.innerHTML) + 1
//     if (n==2) count2.innerHTML = parseInt(count1.innerHTML) + 1
}

function move(){
    x += xSpeed
    y += ySpeed

    //x и у = координаты левого верхнего угла мячика
    //250 - высота платформы
    if ((x<50 && (y > player1y && y<player1y+250)) ||
        (x+25 > W-50 && (y > player2y && y<player2y+250))){
            xSpeed *= -1;
            ySpeed += 1;
            ySpeed *= -1;
    }

    if (x<0) loose(1)
    if (x>W) loose(2)
    if (y<0 || y>H-50) ySpeed *= -1

    heroBall.style.left = x 
    heroBall.style.top = y

    player1y += player1Speed
    if (player1y<0) player1y = 0
    if (player1y+250>H) player1y = H-250

    player1.style.top = player1y

    player2y += player2Speed
    if (player2y<0) player2y = 0
    if (player2y+250>H) player2y = H-250
    player2.style.top = player2y
}
console.log(player1Speed)
player1y += 100 + 'px'
console.log(H/2 +7777)
