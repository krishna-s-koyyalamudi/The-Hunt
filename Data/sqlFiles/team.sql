CREATE TABLE IF NOT EXISTS Team (
    `teamId` INT,
    `teamName` VARCHAR(16) CHARACTER SET utf8,
    `creatorUserId` INT,
    `datetimeCreated` DATETIME,
    `datetimeLastEdited` DATETIME
);
INSERT INTO Team VALUES
    (1001,'SunRisers',12346,'2020-09-09 00:00:00','2020-09-10 00:00:00'),
    (1002,'RoyalChallengers',67783,'2020-09-10 00:00:00','2020-09-10 00:00:00');
