INSERT INTO artist
    (name)
VALUES
    ('Spagheddy'),
    ('Virtual Riot'),
    ('Riot');

SELECT TOP 10\
FROM artist
ORDER BY name DESC;

SELECT TOP 5\
FROM artist
ORDER BY name ASC;

SELECT *
FROM artist
WHERE name LIKE 'Black%';

SELECT *
FROM artist
WHERE name LIKE '%Black%';