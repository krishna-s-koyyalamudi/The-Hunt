CREATE TABLE IF NOT EXISTS user (
    `email` VARCHAR(22) CHARACTER SET utf8,
    `password` VARCHAR(12) CHARACTER SET utf8,
    `userId` INT,
    `userName` VARCHAR(9) CHARACTER SET utf8,
    `dateCreated` DATETIME,
    `dateLastAccessed` DATETIME

);
INSERT INTO user VALUES
    ('ravuluri@gmail.com','ravi1432',12346,'ravi','2020-09-08 00:00:00','2020-09-08 00:00:00'),
    ('Anushaa12@gmail.com','anuravi',56536,'anu123','2020-09-08 00:00:00','2020-09-08 00:00:00'),
    ('sandy@gmail.com','anujesus',53562,'sandy12','2020-09-08 00:00:00','2020-09-08 00:00:00'),
    ('DEVI@gmail.com','sandypaul',87688,'devi45','2020-09-08 00:00:00','2020-09-08 00:00:00'),
    ('tarun231@gmail.com','tarunfarhen',67783,'tarun231','2020-09-11 00:00:00','2020-09-11 00:00:00'),
    ('aswin@gmail.com','aswinrebca',66773,'aswin456','2020-09-11 00:00:00','2020-09-11 00:00:00'),
    ('raghu2341@gmail.com','raghunikki',36737,'raghu2341','2020-09-08 00:00:00','2020-09-10 00:00:00'),
    ('eswar564@gmail.com','eswarfox',35627,'eswar546','2020-09-08 00:00:00','2020-09-08 00:00:00'),
    ('dhinkar70@gmail.com','dhinkarmary',65677,'dhink564','2020-09-08 00:00:00','2020-09-09 00:00:00'),
    ('paul7@gmail.com','paulemmanuel',56268,'paul143','2020-09-08 00:00:00','2020-09-08 00:00:00'),
    ('nikki@gmail.com','mickynikki',63772,'nikki345','2020-09-09 00:00:00','2020-09-08 00:00:00'),
    ('bhuvanathopu@gmail.com','bhuavanares',67790,'bhuv213','2020-09-10 00:00:00','2020-09-07 00:00:00'),
    ('naveen876@gmail.com','naivewhite',134420,'pnavee345','2020-09-08 00:00:00','2020-09-08 00:00:00'),
    ('harigaddam@gmail.com','baconlove',345291,'hari876','2020-09-10 00:00:00','2020-09-09 00:00:00'),
    ('bonkerz@gmail.com','bonkersuper',679882,'bonk342','2020-09-08 00:00:00','2020-09-10 00:00:00'),
    ('falaf@gmail.com','fala@12',672362,'fafa','2020-09-08 00:00:00','2020-09-08 00:00:00');
