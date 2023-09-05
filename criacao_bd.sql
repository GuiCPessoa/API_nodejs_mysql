CREATE DATABASE dbApi_Estudantes;
USE dbApi_Estudantes;


CREATE TABLE estudantes (
codigo INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
sobrenome VARCHAR(50)
);


INSERT INTO estudantes (nome, sobrenome) VALUES ('Guilherme', 'Caio');
INSERT INTO estudantes (nome, sobrenome) VALUES ('Baby', 'Yoda');
INSERT INTO estudantes (nome, sobrenome) VALUES ('Mandalorian', 'Pascal');
INSERT INTO estudantes (nome, sobrenome) VALUES ('Dazz', 'Pedro');

SELECT * FROM estudantes