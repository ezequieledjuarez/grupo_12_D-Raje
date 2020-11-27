-- MariaDB dump 10.17  Distrib 10.4.14-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: draje
-- ------------------------------------------------------
-- Server version	10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_user` int(10) unsigned NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `total` decimal(8,2) DEFAULT NULL,
  PRIMARY KEY (`id`,`id_user`),
  KEY `idUser` (`id_user`),
  CONSTRAINT `idUser` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(128) NOT NULL,
  `marca` varchar(128) NOT NULL,
  `descripcion` varchar(256) NOT NULL,
  `precio` decimal(8,2) unsigned NOT NULL,
  `descuento` int(10) unsigned DEFAULT NULL,
  `image` varchar(128) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `estado` varchar(45) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'Cartuchera canopla Unicornio','Mooving','Cartuchera en forma de canopla, 2 compartimientos, edición Unicornio',500.00,25,'image-1604791411802.jpg',NULL,'2020-11-24','oferta','escolar'),(4,'Resltadores pastel x8','Mooving','Nuevos colores de resaltadores, esta vez color pastel, ideal para resaltar apuntes',480.00,15,'image-1604790821361.jpg',NULL,'2020-11-07','oferta','escolar'),(6,'Cartulinas x6','Cartulina','Set de 6 cartulinas color pastel',150.00,0,'image-1604790887125.jpg',NULL,'2020-11-07','pmv','escolar'),(7,'Hojas rayadas x480','Éxito','Pack de hojas rayadas de repuesto Éxito x480',900.00,0,'image-1604790919551.jpg',NULL,'2020-11-07','pmv','escolar'),(8,'Goma de borrar','Maped','Goma para borrar lapiz con la parte blanca y tinta con la parte azul',30.00,0,'image-1604790948794.jpg',NULL,'2020-11-07','pmv','escolar'),(9,'Guillotina de papel','Dasa','Cuchillas de acero cementado rectificadas autoafilables.Corta todo tipo de papel y derivados, cuerinas y gomas finas, etc.',3200.00,0,'image-1604790983615.jpg',NULL,'2020-11-09','sin-estado','oficina'),(10,'Lapiceras colores clásicos x15','Bic','Bolígrafos marca Bic, azul y negro, trazo grueso.5 azules,4 negras 3 rojas, 3 verdes.',500.00,0,'image-1604791024914.jpg',NULL,'2020-11-07','sin-estado','escolar'),(11,'Lapiceras multicolor x15','Bic','Boligrafos multicolor Bic, punto gruesa',480.00,0,'image-1604791063403.jpg',NULL,'2020-11-07','sin-estado','escolar'),(12,'Lapices de colores x48','Maped','Lapices de colores dobles punta, punta de 2 pulgadas, en caja metálica.',1100.00,0,'image-1604791122848.jpg',NULL,'2020-11-07','sin-estado','escolar'),(13,'Marcadores x25','Sharpie','25 marcadores Electro Pop de colores',850.00,0,'image-1604791201399.jpg',NULL,'2020-11-07','sin-estado','escolar'),(14,'Marcador negro','Sharpie','Marcador negro indeleble',190.00,0,'image-1604791233083.jpg',NULL,'2020-11-09','sin-estado','oficina'),(15,'Ruleta','Sharpie','26 Sharpies punta fina, 4 Sharpie neón, 3 hojas para colorear',1500.00,0,'image-1604791275913.jpg',NULL,'2020-11-09','sin-estado','artistica'),(16,'Plasticola','Srt','Cola vinílica 100gr',50.00,0,'image-1604791450062.jpg',NULL,'2020-11-07','sin-estado','escolar'),(17,'Voligoma','Voligoma','Adhesivo sintético plástico 30ml',55.00,0,'image-1604791516051.jpg',NULL,'2020-11-07','sin-estado','escolar'),(18,'Cuaderno Htal Garrahan','Garrahan','Cuaderno ecológico del Hospital Garrahan. 48 hojas, tapa blanda.',480.00,0,'image-1604791483045.jpg','2020-11-07','2020-11-07','sin-estado','escolar');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productxcart`
--

DROP TABLE IF EXISTS `productxcart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productxcart` (
  `idProduct` int(10) unsigned NOT NULL,
  `idCart` int(10) unsigned NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  PRIMARY KEY (`idProduct`,`idCart`),
  KEY `idCart` (`idCart`),
  CONSTRAINT `idCart` FOREIGN KEY (`idCart`) REFERENCES `carts` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idProduct` FOREIGN KEY (`idProduct`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productxcart`
--

LOCK TABLES `productxcart` WRITE;
/*!40000 ALTER TABLE `productxcart` DISABLE KEYS */;
/*!40000 ALTER TABLE `productxcart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `password` varchar(128) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `image` varchar(128) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `Carts_idProduct` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Juan Carlos','Troche Hinojosa','juan@juan.com','$2b$10$fPzGUkIP1wyjmi2At58OSOojztTpysG64JDUYz.uy6YEMMVYbpejC','user','imgDeffault.jpg',NULL,NULL,0),(3,'Axel','Segovia','axel@axel.com','$2b$10$spLmdNEFqbiYzIIajC/Y1uJv2SP/NCW8zEHGylpXlqCxReZMxmWAK','user','imgDeffault.jpg',NULL,NULL,0),(4,'User','Test','user@user.com','$2b$10$UbjsVuH8ZdVITiG07GV2E.7YBcBEN52c8wDqPBXEG.J27alLM0Ir6','user','image-1601819203203.jpg',NULL,NULL,0),(5,'Admin','Istrador','admin@admin.com','$2b$10$UbjsVuH8ZdVITiG07GV2E.7YBcBEN52c8wDqPBXEG.J27alLM0Ir6','admin','image-1601819203203.jpg',NULL,'2020-11-11',0),(41,'Eze','Juarez','eze@eze.com','$2b$10$S4FrJv6h5.a.76ULxirILulEc5eyoEEAkPG7E2KeYLI0bpBcA4CB6','user','image-1605096896183.jpg','2020-11-11','2020-11-11',0),(47,'Eze','aasf','ezeaas@ezeawf.com','$2b$10$Bnvhqvm3KFAZzIYlpPLmOurxTKTidJ9q149zqdWEyEG9cWVo/F6Vm','user','imagen-1605581165061.jpg','2020-11-17','2020-11-17',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-27 20:17:32
