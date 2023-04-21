-- EASY --

-- 1 

SELECT primary_phone
FROM guests
WHERE first_name = 'Sam';

-- 2

SELECT name
FROM animals
WHERE species_id IN (
    SELECT species_id
    FROM species
    WHERE name = 'Penguin'
);

-- 3

SELECT type
FROM feed
WHERE feed_id IN (
    SELECT feed_id
    FROM pen_feed
    WHERE pen_id IN (
        SELECT pen_id
        FROM pens
        WHERE name = 'Bear Pen'
    )
);

-- INTERMEDIATE --

-- 1

SELECT a.name AS animal_name, s.name AS species_name
FROM animals AS a
JOIN species AS s ON a.species_id = s.species_id
JOIN favorite_animals AS fa ON a.animal_id = fa.animal_id
JOIN guests AS g ON fa.guest_id = g.guest_id
WHERE g.first_name = 'Smith';

-- 2

SELECT s.description AS species_description 
FROM species AS s
JOIN animals AS a ON s.species_id = a.species_id
JOIN pen_feed AS pf ON a.pen_id = pf.pen_id
JOIN feed AS f ON pf.feed_id = f.feed_id
WHERE f.name = 'Raw Fish';

-- 3

SELECT first_name AS firstName, last_name AS lastName
FROM guests
WHERE guest_id IN (
    SELECT guest_id
    FROM favorite_animals
    WHERE animal_id IN (
        SELECT animal_id
        FROM animals
        WHERE name = 'Pokey'
    )
);

-- HARD --

-- 1

SELECT g.first_name AS firstName, g.last_name AS lastName, f.name AS foodName, f.type AS foodType, a.name AS animalNAme, s.name AS speciesName, p.environment
FROM guests AS g
JOIN favorite_animals AS fa ON g.guest_id = fa.guest_id
JOIN animals AS a ON fa.animal_id = a.animal_id
JOIN species AS s ON a.species_id = s.species_id
JOIN pens AS p ON s.species_id = p.species_id
JOIN pen_feed AS pf ON p.pen_id = pf.pen_id
JOIN feed AS f ON pf.feed_id = f.feed_id
WHERE g.primary_phone = '(401) 383-2001';
