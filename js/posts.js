/* eslint-disable no-unused-vars */
function abrirPaginaindex() {
    window.location.href = "index.html";
}

function abrirPaginaTabs() {
    window.location.href = "tabs.html";
}

function abrirPaginaFactories() {
    window.location.href = "factories.html";
}

function avancar(element) {
    element.style.transform = 'translate(5px, -5px)';
}

function recuar(element) {
    element.style.transform = 'translate(0, 0)';
}

document.getElementById("comment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    var comment = document.getElementById("comment").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "post_comment.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Atualiza a lista de comentários, se necessário
            // Aqui você pode adicionar lógica para atualizar a exibição dos comentários sem recarregar a página
        }
    };
    xhr.send("comment=" + comment);
});

function playSoundOnHover(somBotao1) {
    var audio = document.getElementById(somBotao1);
    if (audio) {
        audio.currentTime = 0; // Reinicia o áudio, se já estiver reproduzindo
        audio.play();
    } else {
        console.error("Elemento de áudio não encontrado com o ID:", somBotao1);
    }
}