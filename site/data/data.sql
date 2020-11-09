-- Server version	10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'Cartuchera canopla Unicornio','Mooving','Cartuchera en forma de canopla, 2 compartimientos, edición Unicornio',500.00,25,'img-cartuchera-canopla-moving',NULL,NULL,'oferta','Escolar'),(4,'Resltadores pastel x8','Mooving','Nuevos colores de resaltadores, esta vez color pastel, ideal para resaltar apuntes',480.00,15,'img-resaltadores-pastel-mooving.jpg',NULL,NULL,'oferta','Escolar'),(5,'Bolígrafo','Simball','Boligrafo retractil color azul',150.00,10,'img-boligrafo-azul-simball',NULL,NULL,'oferta','Oficina'),(6,'Cartulinas x6','Cartulina','Set de 6 cartulinas color pastel',150.00,0,'img-cartulinas-pastel',NULL,NULL,'pmv','Escolar'),(7,'Hojas rayadas x480','Éxito','Pack de hojas rayadas de repuesto Éxito x480',900.00,0,'img-hojas-exito',NULL,NULL,'pmv','Escolar'),(8,'Goma de borrar','Maped','Goma para borrar lapiz con la parte blanca y tinta con la parte azul',30.00,0,'img-goma-maped',NULL,NULL,'pmv','Escolar'),(9,'Guillotina de papel','Dasa','Cuchillas de acero cementado rectificadas autoafilables.Corta todo tipo de papel y derivados, cuerinas y gomas finas, etc. ',3200.00,0,'img-guillotina-papel-dasa',NULL,NULL,'sin-estado','Oficina'),(10,'Lapiceras colores clásicos x15','Bic','Bolígrafos marca Bic, azul y negro, trazo grueso.5 azules,4 negras 3 rojas, 3 verdes.',500.00,0,'img-lapiceras-clasicas-bic',NULL,NULL,'sin-estado','Oficina'),(11,'Lapiceras multicolor x15','Bic','Boligrafos multicolor Bic, punto gruesa',480.00,0,'img-lapiceras-multicolor-bic',NULL,NULL,'sin-estado','Escolar'),(12,'Lapices de colores x48','Maped','Lapices de colores dobles punta, punta de 2 pulgadas, en caja metálica.',1100.00,0,'img-lapices-colores-maped',NULL,NULL,'sin-estado','Escolar'),(13,'Marcadores x25','Sharpie','25 marcadores Electro Pop de colores',850.00,0,'img-marcadores-sharpie',NULL,NULL,'sin-estado','Escolar'),(14,'Marcador negro','Sharpie','Marcador negro indeleble',190.00,0,'img-marcador-negro-sharpie',NULL,NULL,'sin-estado','Oficina'),(15,'Ruleta','Sharpie','26 Sharpies punta fina, 4 Sharpie neón, 3 hojas para colorear',1500.00,0,'img-ruleta-sharpie',NULL,NULL,'sin-estado','Escolar'),(16,'Plasticola','Srt','Cola vinílica 100gr',50.00,0,'img-plasticola',NULL,NULL,'sin-estado','Escolar'),(17,'Voligoma','Voligoma','Adhesivo sintético plástico 30ml',50.00,0,'img-voligoma',NULL,NULL,'sin-estado','Escolar');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productxcart`
--

LOCK TABLES `productxcart` WRITE;
/*!40000 ALTER TABLE `productxcart` DISABLE KEYS */;
/*!40000 ALTER TABLE `productxcart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Juan Carlos','Troche Hinojosa','juan@juan.com','$2b$10$fPzGUkIP1wyjmi2At58OSOojztTpysG64JDUYz.uy6YEMMVYbpejC','user','imgDeffault.jpg',NULL,NULL,0),(2,'Ezequiel','Juarez','eze@eze.com','$2b$10$4sXjVTZcuYLiGS64Qo8y9uB3BF8IeHDvCoKEEclwsw8rv6n4wiNYK','user','imgDeffault.jpg',NULL,NULL,0),(3,'Axel','Segovia','axel@axel.com','$2b$10$spLmdNEFqbiYzIIajC/Y1uJv2SP/NCW8zEHGylpXlqCxReZMxmWAK','user','imgDeffault.jpg',NULL,NULL,0),(4,'User','Test','user@user.com','$2b$10$UbjsVuH8ZdVITiG07GV2E.7YBcBEN52c8wDqPBXEG.J27alLM0Ir6','user','image-1601819203203.jpg',NULL,NULL,0),(5,'Admin','Istrador','admin@admin.com','$2b$10$UbjsVuH8ZdVITiG07GV2E.7YBcBEN52c8wDqPBXEG.J27alLM0Ir6','admin','image-1601819203203.jpg',NULL,NULL,0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-27 18:44:00
