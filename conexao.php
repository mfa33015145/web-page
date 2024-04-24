<?php
$servername = "localhost";
$username = "guitar";
$password = "guitar";
$dbname = "comentarios_db";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>