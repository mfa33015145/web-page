<?php
include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $comentario = $_POST['comentario'];

    $sql = "INSERT INTO comentarios (comentario) VALUES ('$comentario')";

    if ($conn->query($sql) === TRUE) {
        echo "Comentário postado com sucesso!";
    } else {
        echo "Erro ao postar o comentário: " . $conn->error;
    }
}

$conn->close();
?>
