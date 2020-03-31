CREATE DATABASE IF NOT EXISTS burgers_db;

use burgers_db;

CREATE TABLE IF NOT EXISTS burgers (
    `id` int(11) AUTO_INCREMENT NOT NULL,
    `burger_name` varchar(200) NOT NULL,
    `devoured` bool,
    primary key (`id`)
)