CREATE DATABASE comentarios_db;
USE comentarios_db;
CREATE TABLE comentarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    comentario TEXT,
    data_postagem TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);