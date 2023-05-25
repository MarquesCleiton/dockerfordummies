CREATE DATABASE db_memes;
USE db_memes;
CREATE TABLE tb_meme (
  id int NOT NULL AUTO_INCREMENT,
  link_foto varchar(2000) NOT NULL,
  nome varchar(30) NOT NULL,
  PRIMARY KEY (id)
);