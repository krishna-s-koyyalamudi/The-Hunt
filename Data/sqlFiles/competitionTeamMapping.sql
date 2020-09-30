CREATE TABLE IF NOT EXISTS competitionTeamMapping (
    `competitionTeamId` INT,
    `competitionId` INT,
    `teamId` INT,
    `datetimeInvited` DATETIME,
    `datetimeAccepted` DATETIME,
    `datetimeRejected` INT
);
INSERT INTO competitionTeamMapping VALUES
    (212,123,1001,'2020-09-11 00:00:00','2020-09-11 00:00:00',NULL),
    (312,123,1002,'2020-09-11 00:00:00',NULL,NULL),
    (412,312,1001,'2020-09-11 00:00:00','2020-09-11 00:00:00',NULL),
    (512,312,1002,'2020-09-11 00:00:00',NULL,NULL);
