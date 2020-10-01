  
CREATE TABLE IF NOT EXISTS Location (
    `locationId` INT,
    `questId` INT,
    `lcationLatitude` NUMERIC(8, 6),
    `locationLongitude` NUMERIC(9, 6),
    `locationValue` INT
PRIMARY KEY(locationId);
);
INSERT INTO Location VALUES
    (666,121,44.33328,-89.132008,20),
    (345,121,33.755787,-116.359998,30),
    (234,121,33.844843,-116.54911,40),
    (890,121,44.92057,-93.44786,50),
    (776,123,44.240309,-91.493619,10),
    (678,123,44.968041,-94.419696,25),
    (509,123,44.333304,-89.132027,35),
    (980,123,33.755783,-116.360066,40);
