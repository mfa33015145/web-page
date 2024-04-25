function abrirPaginaFactories() {
    window.location.href = "factories.html";
}

function abrirPaginaTabs() {
    window.location.href = "tabs.html";
}

function abrirPaginaPosts() {
    window.location.href = "posts.html";
}
function abrirPaginaBemVindo() {
    window.location.href = "bemvindo.html";
}
function avancar(element) {
    element.style.transform = 'translate(5px, -5px)';
}

function recuar(element) {
    element.style.transform = 'translate(0, 0)';
}

function playSoundOnHover(somBotao1) {
    var audio = document.getElementById(somBotao1);
    if (audio) {
        audio.currentTime = 0; // Reinicia o áudio, se já estiver reproduzindo
        audio.play();
    } else {
        console.error("Elemento de áudio não encontrado com o ID:", somBotao1);
    }
}

