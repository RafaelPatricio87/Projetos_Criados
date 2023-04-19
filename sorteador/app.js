async function sortear() {
    const totalResultado = Number(document.querySelector('#totalResultado').value)
    const menorValor = Number(document.querySelector('#menorValor').value)
    const maiorValor = Number(document.querySelector('#maiorValor').value)

    for (let j = 0; j < 20; j++) {
        const divCard = document.querySelector('.results-values')
        divCard.innerHTML = ""

        for (let i = 0; i < totalResultado; i++) {
            const resultado = Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor

            const divResultado = document.createElement('div')

            divResultado.classList.add('result-value')
            divResultado.innerText = resultado

            divCard.appendChild(divResultado)

        }
        await wait(20)
    }
}

function wait(tempo) {
    return new Promise((resolve) => {
        setInterval(() => resolve(), tempo)
    })
}
// https://www.youtube.com/watch?v=KQN3ketYTt0