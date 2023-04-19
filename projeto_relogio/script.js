
function atualizarTempo() {
    const display = document.querySelector('.display')
    const agora = new Date();

    function adicionaZero(texto){
        if(texto < 10){
            texto = '0' + texto
        }
        return texto
    }
    display.textContent = `${adicionaZero(agora.getHours())}:${adicionaZero(agora.getMinutes())}:${adicionaZero(agora.getSeconds())}`
}
atualizarTempo()
setInterval(atualizarTempo,1000)
