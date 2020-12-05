-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DRajeFork
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema DRajeFork
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DRajeFork` DEFAULT CHARACTER SET utf8 ;
USE `DRaje` ;

-- -----------------------------------------------------
-- Table `DRajeFork`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DRaje`.`Users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `password` VARCHAR(128) NOT NULL,
  `categoria` VARCHAR(45) NOT NULL,
  `image` VARCHAR(128) NULL,
  `created_at` DATE NULL,
  `updated_at` DATE NULL,
  `carts_id_product` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DRajeFork`.`Categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DRaje`.`Categories` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DRajeFork`.`States`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DRaje`.`States` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DRajeFork`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DRaje`.`Products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(128) NOT NULL,
  `marca` VARCHAR(128) NOT NULL,
  `descripcion` VARCHAR(256) NOT NULL,
  `precio` DECIMAL(8,2) UNSIGNED NOT NULL,
  `descuento` INT UNSIGNED NULL,
  `image` VARCHAR(128) NULL,
  `created_at` DATE NULL,
  `updated_at` DATE NULL,
  `disponible` TINYINT(2) NOT NULL,
  `id_categories` INT NOT NULL,
  `id_states` INT NOT NULL,
  PRIMARY KEY (`id`),

    FOREIGN KEY (`id_categories`)
    REFERENCES `DRaje`.`Categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `state_id`
    FOREIGN KEY (`id_states`)
    REFERENCES `DRaje`.`States` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DRajeFork`.`Carts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DRaje`.`Carts` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_user` INT UNSIGNED NOT NULL,
  `cantidad` INT NULL,
  `total` DECIMAL(8,2) NULL,
  PRIMARY KEY (`id`, `id_user`),
    FOREIGN KEY (`id_user`)
    REFERENCES `DRaje`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DRajeFork`.`ProductXCart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DRaje`.`ProductXCart` (
  `id_product` INT UNSIGNED NOT NULL,
  `id_cart` INT UNSIGNED NOT NULL,
  `cantidad` INT NULL,
  PRIMARY KEY (`id_product`, `id_cart`),
    FOREIGN KEY (`id_cart`)
    REFERENCES `DRaje`.`Carts` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    FOREIGN KEY (`id_product`)
    REFERENCES `DRaje`.`Products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
