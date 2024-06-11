-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: nutri_boost
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `idCategoria` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id_product` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(200) DEFAULT NULL,
  `product_desc` varchar(200) DEFAULT NULL,
  `product_price` decimal(10,2) DEFAULT NULL,
  `product_img` varchar(255) DEFAULT NULL,
  `idCategoria` int DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  KEY `idCategoria_idx` (`idCategoria`),
  CONSTRAINT `idCategoria` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (7,'Whey Protein','Proteina de suero de leche',50.00,'https://statics-cuidateplus.marca.com/cms/styles/ratio_16_9/azblob/suplementos-proteinas.jpg.webp?itok=rmBza9ke',NULL),(9,'Barritas Energéticas','Es una deliciosa y compacta barrita diseñada para brindar un impulso rápido de energía en cualquier momento del día',2.70,'https://t1.uc.ltmcdn.com/es/posts/1/8/4/como_hacer_barritas_energeticas_con_chocolate_26481_600.jpg',NULL),(10,'Creatina ','El mejor suplemento para mejorar el rendimiento de tu fuerza',68.99,'https://www.cuerpomente.com/medio/2023/03/20/creatina_ec38e36f_1280x720.jpg',NULL),(12,'Omega 3','Ácidos esenciales Omega 3 de origen animal y vegetal',5.20,'https://fitstore.es/5763-large_default/omega3.jpg',NULL),(13,'Cafeina ','Cafeina en capsulas con vitamina B5 y B6',2.72,'https://i.blogs.es/848b3d/photo-1558956397-24d60741abc2/1366_2000.jpeg',NULL),(18,'Vitamina D3','Las Cápsulas blandas de Vitamina D3 de Myvitamins son una fuente excelente de vitamina D esencial para reforzar la salud general y el bienestar.',10.00,'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR8mDZB2waJNGdRylaAyPJDhidCxl1LLZojVXOjQ7rKMriN8laQw47cjGLTRVq-c1Ty6XyQjcyPcilQQlBY8RbaFaL88XaJYCApFHeWO-I75edp0HP9GNBciIOxM35hjlEy0AhVZw&usqp=CAc',NULL),(23,'Caseína','La caseína es una proteína de alto valor biológico que encontramos en la leche en forma de un complejo soluble de calcio y fósforo.',29.99,'https://www.diariodesevilla.es/2021/09/24/sociedad/caseina-proteina-culturistas-sirve-tomarla_1613849573_144334627_1200x675.jpg',NULL),(24,'Proteína de soja','La soja es una excelente fuente de proteína vegetal ya que contiene todos los aminoácidos que se necesitan para una proteína completa',34.99,'https://mejorconsalud.as.com/wp-content/uploads/2018/08/proteina-soja.jpg',NULL),(25,'Glutamina','La glutamina es el aminoácido más abundante del organismo y está implicada en numerosos procesos del metabolismo intermediario',19.99,'https://media.misohinutricion.com/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/g/l/glutamina-capsulas_1.jpg',NULL),(26,'Calcio','El calcio es el mineral más abundante en el organismo. Casi todo el calcio se almacena en los huesos y los dientes, lo que les da estructura y rigidez.',12.99,'https://images.hola.com/imagenes/estar-bien/20200408165263/suplementos-calcio-dieta-sana-ml/0-809-438/calcio-t.jpg',NULL);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sugerencia`
--

DROP TABLE IF EXISTS `sugerencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sugerencia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(200) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `motivo` varchar(200) DEFAULT NULL,
  `mensaje` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sugerencia`
--

LOCK TABLES `sugerencia` WRITE;
/*!40000 ALTER TABLE `sugerencia` DISABLE KEYS */;
INSERT INTO `sugerencia` VALUES (3,'sugerenciaprueba@gmail.com','123456789','Motivo de la primera sugerencia','Este es un mensaje para comprobar la primera sugerencia de la página'),(4,'sugerenciaprueba2@gmail.com','321456789','Segundo ejemplo sugerencia prueba','Esta es la segunda sugerencia de prueba para ver que funciona correctamente'),(5,'peral@gmail.com','1234567987','Es muy malo','peral deja de jugar blitz porfavor'),(6,'pedroalv@gmail.com','123456789','ejemplo de queja','Esta es un ejemplo de mensaje');
/*!40000 ALTER TABLE `sugerencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellidos` varchar(200) DEFAULT NULL,
  `nombre_usuario` varchar(50) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `contrasena` varchar(200) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `direccion` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Alex','López','Alexlu21','alexlugris@gmail.com','pass1234','652072002','A Coruña'),(3,'Daniel','Rodriguez','D_Rodriguez','drodriguez@gmail.com','d1234','652078888','Barcelona'),(6,'Belen','Barcia Mejía','BelenBM','belenbm@gmail.com','b1234','123456789','Baiona'),(7,'mario','gomez','mariogz','mariogz@gmail.com','m1234','123456789','calle ficticia'),(8,'pedro','alvarez','pedroalv','pedroalv@gmail.com','p1234','123456789','calle ficticia');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-27 14:08:56
