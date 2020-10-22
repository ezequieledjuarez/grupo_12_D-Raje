-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DRaje
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema DRaje
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DRaje` DEFAULT CHARACTER SET utf8 ;
USE `DRaje` ;

-- -----------------------------------------------------
-- Table `DRaje`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DRaje`.`Users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `password` VARCHAR(128) NOT NULL,
  `categoria` VARCHAR(45) NOT NULL,
  `image` VARCHAR(128) NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  `Carts_idProduct` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DRaje`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DRaje`.`Products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(128) NOT NULL,
  `marca` VARCHAR(128) NOT NULL,
  `descripcion` VARCHAR(256) NOT NULL,
  `precio` DECIMAL(8,2) UNSIGNED NOT NULL,
  `descuento` INT UNSIGNED NULL,
  `image` VARCHAR(128) NULL,
  `createdAt` DATE NULL,
  `updatedAt` DATE NULL,
  `estado` VARCHAR(45) NOT NULL,
  `categoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DRaje`.`Carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DRaje`.`Carts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idUser` INT UNSIGNED NOT NULL,
  `cantidad` INT NULL,
  `total` DECIMAL(8,2) NULL,
  PRIMARY KEY (`id`, `idUser`),
  CONSTRAINT `idUser`
    FOREIGN KEY (`idUser`)
    REFERENCES `DRaje`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DRaje`.`ProductXCart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DRaje`.`ProductXCart` (
  `idProduct` INT UNSIGNED NOT NULL,
  `idCart` INT UNSIGNED NOT NULL,
  `cantidad` INT NULL,
  PRIMARY KEY (`idProduct`, `idCart`),
  CONSTRAINT `idCart`
    FOREIGN KEY (`idCart`)
    REFERENCES `DRaje`.`Carts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idProduct`
    FOREIGN KEY (`idProduct`)
    REFERENCES `DRaje`.`Products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
