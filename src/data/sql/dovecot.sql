SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DELIMITER ;;

DROP PROCEDURE IF EXISTS `create_user`;;
CREATE PROCEDURE `create_user`(IN `host` varchar(100), IN `user` varchar(100), IN `pass` varchar(100))
BEGIN
DECLARE domain_id INT(10) DEFAULT 1;
SET domain_id=(SELECT `id` FROM `domain` WHERE `domain`=host LIMIT 1);
INSERT INTO `user` (`id`, `domain_id`, `password` , `user`) VALUES (0, domain_id, ENCRYPT(pass, CONCAT('$6$', SUBSTRING(SHA(RAND()), -16))), user);
END;;

DELIMITER ;

DROP TABLE IF EXISTS `alias`;
CREATE TABLE `alias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `domain_id` int(11) NOT NULL,
  `alias` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `target` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `domain_id` (`domain_id`),
  CONSTRAINT `alias_ibfk_1` FOREIGN KEY (`domain_id`) REFERENCES `domain` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `domain`;
CREATE TABLE `domain` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `domain` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `domain_id` int(11) NOT NULL,
  `password` varchar(106) COLLATE utf8_unicode_ci NOT NULL,
  `user` varchar(120) COLLATE utf8_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `domain_id` (`domain_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`domain_id`) REFERENCES `domain` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
