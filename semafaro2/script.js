const red = document.getElementById('red')
const yellow = document.getElementById('yellow')
const green = document.getElementById('green')
const automatic = document.getElementById('automatic')
const img = document.getElementById('img')
let i = 0
let intervalId = null
let imagens = ["img/vermelho.png","img/amarelo.png","img/verde.png" ]


function mudarImagens(){
    img.src = imagens[i]
    i++
    if(i > imagens.length -1 ){
        i = 0
    }
}

let ativaAuto = () => {
    clearInterval(intervalId)
   intervalId = setInterval(mudarImagens,1000)
    
}


red.addEventListener('click', () => {
    clearInterval(intervalId)
    img.src = "img/vermelho.png" 
})
yellow.addEventListener('click', () => {
    clearInterval(intervalId)
    img.src = "img/amarelo.png" 
})
green.addEventListener('click', () => {
    clearInterval(intervalId)
    img.src = "img/verde.png" 
})
automatic.addEventListener('click', ativaAuto)
