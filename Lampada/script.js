const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const img = document.getElementById('img')

function isquebrada() {
    return img.src.indexOf('quebrada') > -1
}



ligar.addEventListener('click', () => {
    if (!isquebrada()) {
        img.src = "img/ligada.jpg"
    }
})
desligar.addEventListener('click', () => {
    img.src = "img/desligada.jpg"
})
img.addEventListener('mouseover', () => {
    if (!isquebrada()) {
        img.src = "img/ligada.jpg"
    }
})
img.addEventListener('mouseout', () => {
    if (!isquebrada()) {
        img.src = "img/desligada.jpg"
    }
})
img.addEventListener('dblclick', () => {
    img.src = "img/quebrada.jpg"
})

