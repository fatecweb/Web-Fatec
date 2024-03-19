

// Chamado quando a página carrega
const NOME = prompt()

const h1 = document.querySelector(".nome")
const mensagem = document.querySelector(".msg")
const foto = document.querySelector(".imagem")

h1.textContent = NOME


function trocaMensagem(msg, cor, imagemURL) {
    mensagem.textContent = msg
    mensagem.style.color = cor
    foto.src = imagemURL
}

function pegarHorario() {
    const hora = new Date().getHours()
    if(hora > 6 && hora < 12) {
        console.log(hora)
        trocaMensagem("BOM DIA", "#FAB32F", "./images/manha.png")
    } else if(hora < 18) {
        trocaMensagem("BOA TARDE", "#E83F35", "./images/tarde.png")
    } else {
        trocaMensagem("BOA NOITE", "#252160", "./images/noite.png")
    }
    
}
window.addEventListener("load", pegarHorario)
