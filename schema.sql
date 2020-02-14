DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;


CREATE TABLE burgers (
  id int AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(40),
  devoured BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY(id)
);

