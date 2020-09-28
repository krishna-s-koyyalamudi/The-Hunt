CREATE TABLE IF NOT EXISTS Quests (
    `questId` INT,
    `questName` VARCHAR(7) CHARACTER SET utf8,
    `creatoUserId` INT,
    `questStartLocationLatitude` NUMERIC(8, 6),
    `questStartLocationLongitude` NUMERIC(8, 6),
    `dateCreated` DATETIME,
    `dateLastAccessed` VARCHAR(19) CHARACTER SET utf8
);
INSERT INTO Quests VALUES
    (121,'Mask on',1121,44.968046,-94.420307,'2020-06-11 00:00:00','2020-06-11 00:00:00'),
    (123,'Find me',1122,55.968046,-64.420307,'2020-10-11 00:00:00','13/11/2020');
