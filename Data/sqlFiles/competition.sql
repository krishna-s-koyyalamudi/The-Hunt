CREATE TABLE IF NOT EXISTS competition (
    `competitionName` VARCHAR(9) CHARACTER SET utf8,
    `creatorUserId` VARCHAR(21) CHARACTER SET utf8,
    `dateCreated` DATETIME,
    `startDatetime` DATETIME,
    `endDatetime` DATETIME,
    `questId` INT
);
INSERT INTO competition VALUES
    ('Avengers','akhil123@gmail.com','2020-09-10 00:00:00','2020-09-11 00:00:00','2020-09-18 00:00:00',115),
    ('Baahubali','abhinav7234@gmail.com','2020-09-10 00:00:00','2020-09-11 00:00:00','2020-09-18 00:00:00',118);
