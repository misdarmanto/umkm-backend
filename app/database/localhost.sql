-- Adminer 4.8.1 MySQL 5.5.5-10.6.11-MariaDB-0ubuntu0.22.04.1 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

CREATE DATABASE `mbadok` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `mbadok`;

DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `image` text NOT NULL,
  `created_on` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_on` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `employee` (`id`, `name`, `image`, `created_on`, `modified_on`, `deleted`) VALUES
(1,	'Jarwo',	'https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/chefes%2Fbanner-destaque-5-.webp?alt=media&token=7fedf791-72e0-4d5a-93c1-62fac358cee9',	'2023-04-08 16:23:51',	NULL,	0),
(2,	'Junai',	'https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/chefes%2Fchefe-de-cozinha-e-especialistas-de-restaurante.jpg?alt=media&token=9fcb387e-087a-4fea-b04f-f82c8d5127f8',	'2023-04-08 16:23:51',	NULL,	0),
(3,	'Sarmini',	'https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/chefes%2Fchefe-cozinha-profissional.jpg?alt=media&token=1dcc36a7-940e-4e2d-886a-57c253c4ba80',	'2023-04-08 16:23:51',	NULL,	0);

DROP TABLE IF EXISTS `feed-back`;
CREATE TABLE `feed-back` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `message` text NOT NULL,
  `image` text NOT NULL,
  `created_on` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_on` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `feed-back` (`id`, `name`, `message`, `image`, `created_on`, `modified_on`, `deleted`) VALUES
(1,	'Sarah',	'Saya sangat terkesan dengan kualitas hidangan di Restoran ini! Rasanya luar biasa dan presentasinya sangat menarik. Layanan dari staf juga sangat ramah dan profesional. Saya pasti akan kembali lagi!',	'https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/feedback%2Fphoto-1438761681033-6461ffad8d80.avif?alt=media&token=8875e8a7-6a50-45d5-a7b6-e1729ea4b185',	'2023-04-08 16:23:51',	'0000-00-00 00:00:00',	0),
(2,	'David',	'Tempat yang sangat nyaman dan suasana yang menyenangkan. Saya sangat menyukai hidangan mereka, terutama daging panggangnya yang juicy dan empuk. Pelayanan staf juga sangat baik. Sangat direkomendasikan!',	'https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/feedback%2Fphoto-1547425260-76bcadfb4f2c.avif?alt=media&token=56ece1d3-a914-4cc0-8182-aa18c0690cda',	'2023-04-08 16:23:51',	'0000-00-00 00:00:00',	0),
(3,	'Anisa',	'Restoran ini benar-benar memanjakan lidah saya! Hidangan yang dihidangkan sangat enak dan bergizi. Saya juga suka tampilan presentasinya yang cantik. Pelayanan ramah dan cepat membuat pengalaman makan saya sangat menyenangkan',	'https://flowbite.com/docs/images/people/profile-picture-5.jpg',	'2023-04-08 16:23:51',	'0000-00-00 00:00:00',	0),
(4,	'Meta',	'Restoran ini adalah tempat favorit saya untuk bersantap. Hidangan yang mereka sajikan selalu segar, berkualitas tinggi, dan memiliki rasa yang otentik.',	'https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/feedback%2Fpexels-photo-220453.webp?alt=media&token=d831385d-4d73-4bf0-aef9-0cec078949ff',	'2023-04-08 16:23:51',	'0000-00-00 00:00:00',	0),
(5,	'Melia',	'Pelayanannya sangat ramah dan cepat. Makanannya enak dan disajikan dengan indah. Saya pasti akan kembali lagi!',	'https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/feedback%2Fphoto-1554151228-14d9def656e4.avif?alt=media&token=8a9f2d9e-b1fc-45f3-b09f-4735965be9c7',	'2023-04-08 16:23:51',	'0000-00-00 00:00:00',	0);

DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  `stars` int(11) NOT NULL,
  `category` enum('standard','popular') NOT NULL DEFAULT 'standard',
  `price` decimal(12,2) NOT NULL DEFAULT 0.00,
  `created_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `modified_on` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `menu` (`id`, `title`, `description`, `image`, `stars`, `category`, `price`, `created_on`, `modified_on`, `deleted`) VALUES
(2,	'Kraby Paty',	'Nikmati cita rasa unik Kraby Paty yang akan memanjakan lidah Anda. Dari saus khas yang lezat hingga paduan bumbu rahasia yang membuat setiap hidangan kami begitu istimewa. Tersedia pilihan level kepedasan yang dapat disesuaikan, dari yang ringan hingga yang ekstra pedas, untuk memuaskan selera Anda.Selain hidangan utama, Kraby Paty juga menawarkan hidangan pendamping seperti kentang goreng renyah, salad segar, dan roti lezat untuk melengkapi pengalaman makan Anda. Nikmati hidangan lezat kami bersama keluarga, teman, atau rekan kerja Anda.',	'https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Fcocacola.png?alt=media&token=d73ad07b-efa6-41d9-b0dd-8c034f98493b',	4,	'popular',	35000.00,	'2023-04-08 16:13:21',	'2023-04-08 16:24:25',	0),
(3,	'Nasi Goreng',	'Nasi goreng istimewa dengan bumbu khas nusantara.Selain rasa yang lezat, nasi goreng kami juga dihidangkan dengan tampilan yang menggoda mata. Dengan hiasan yang indah, nasi goreng kami menjadi hidangan yang menggugah selera dan siap memanjakan seluruh indera Anda. Kami bangga menggunakan bahan-bahan segar dan berkualitas dalam setiap hidangan nasi goreng kami. Dibuat dengan cinta dan dedikasi, nasi goreng Nusantara kami dijamin memuaskan selera Anda dan memberikan pengalaman makan yang tak terlupakan.',	'https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Fnasi-goreng.jpg?alt=media&token=7fd6994e-3f88-4726-aa8d-16db5e325c49',	4,	'popular',	30000.00,	'2023-04-08 16:13:21',	NULL,	0),
(4,	'Sate Ayam',	'Sate ayam kami dibuat dari daging ayam pilihan yang dipotong kecil-kecil dan ditusukkan pada tusuk sate, kemudian dipanggang dengan arang untuk memberikan aroma dan rasa yang khas. Daging ayam kami diolah dengan bumbu rempah yang kaya, yang membuat sate ayam kami memiliki cita rasa yang unik dan menggugah selera. Kami juga menggunakan bumbu kacang khas dalam saus sate kami, yang memberikan rasa gurih, manis, dan sedikit pedas yang sempurna. Sate ayam kami dihidangkan dengan nasi atau lontong, dan disajikan dengan irisan bawang merah, timun, dan kerupuk sebagai pelengkap.',	'https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Fsate-ayam.jpg?alt=media&token=b730e90d-f962-40a3-97f8-235261d205e9',	4,	'popular',	10000.00,	'2023-04-08 16:13:21',	NULL,	0),
(5,	'Rendang',	'Rendang kami dibuat dari potongan daging sapi pilihan yang dimasak dalam campuran rempah-rempah khas Indonesia yang kaya, seperti serai, daun salam, lengkuas, cabai, dan banyak lagi. Proses memasak rendang kami dilakukan dengan hati-hati selama berjam-jam, sehingga daging sapi kami menjadi sangat empuk dan bumbu meresap hingga ke dalam setiap serat daging. Hasilnya adalah rendang dengan cita rasa yang kompleks, gurih, dan lezat. Daging sapi yang juicy dan bumbu yang kaya akan menggoyang lidah Anda dan membuat Anda ketagihan untuk mencicipi lebih banyak lagi',	'https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Frendang.jpg?alt=media&token=c3a3cb54-f0d0-4a00-a5d1-dc55b6d35cf4',	5,	'popular',	45000.00,	'2023-04-08 16:13:21',	NULL,	0),
(6,	'Gado-Gado',	'Gado-gado kami terbuat dari beragam sayuran segar, seperti kubis, mentimun, tauge, wortel, kentang, dan daun selada, yang diolah dengan hati-hati untuk mempertahankan kandungan nutrisi yang tinggi. Selain itu, kami juga menggunakan tahu, tempe, dan telur rebus sebagai sumber protein nabati yang berkualitas tinggi dalam hidangan gado-gado kami. Saus kacang khas gado-gado kami dihasilkan dari bumbu kacang alami yang dihaluskan dan dicampur dengan bahan-bahan lain seperti gula merah, air asam, dan cabai, yang memberikan cita rasa gurih, manis, dan sedikit pedas yang khas. Saus kacang ini menjadi sajian utama dalam gado-gado kami yang memberikan kenikmatan tersendiri dalam setiap suapan.',	'https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Fgado-gado-khas-betawi-foto-resep-utama.webp?alt=media&token=13d3f2d3-2339-460a-bae3-46eb8ab90952',	3,	'popular',	25000.00,	'2023-04-08 16:13:21',	NULL,	0),
(7,	'Nasi Ayam',	'Nasi Ayam kami terbuat dari bahan-bahan pilihan yang segar dan berkualitas tinggi. Ayam yang kami gunakan diolah dengan rempah-rempah khas, seperti jahe, bawang putih, ketumbar, dan serai, yang memberikan cita rasa unik dan nikmat pada ayam yang kami sajikan. Ayam kami dimasak dengan teknik yang tepat untuk menghasilkan daging yang lezat, empuk, dan penuh dengan aroma rempah-rempah yang menggoda selera. Nasi yang kami gunakan juga diolah dengan hati-hati, menghasilkan nasi yang pulen, harum, dan gurih. Nasi ayam kami biasanya disajikan bersama lauk pelengkap seperti telur rebus, sayuran hijau, dan acar, yang memberikan tambahan nutrisi dan rasa yang beragam dalam satu hidangan.',	'https://firebasestorage.googleapis.com/v0/b/sistemembeded.appspot.com/o/food%2Fnasi-ayam.png?alt=media&token=1fc29f1d-d79e-4b8f-8c4b-529cacf5b394',	4,	'standard',	15000.00,	'2023-04-08 16:13:21',	'2023-04-09 07:55:37',	0);

-- 2023-04-09 01:25:00
