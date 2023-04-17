CREATE TABLE person
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    age INTEGER,
    height INTEGER,
    city VARCHAR(20),
    favorite_color VARCHAR(20)
);

INSERT INTO person
    (name,age,height,city,favorite_color)
VALUES
    ('Eliot', 27, 80, 'Bedford', 'blue'),
    ('Dan', 34, 87, 'Frisco', 'green'),
    ('Janet', 85, 56, 'Plano', 'red'),
    ('Tom', 56, 86, 'Arlington', 'black'),
    ('Cindy', 65, 65, 'Arlington', 'purple');

SELECT *
FROM person
ORDER BY height DESC;

SELECT *
FROM person
ORDER BY height ASC;

SELECT *
FROM person
ORDER BY age DESC;

SELECT *
FROM person
WHERE age > 20;

SELECT *
FROM person
WHERE age = 18;

SELECT *
FROM person
WHERE age < 20 OR age > 30;

SELECT *
FROM person
WHERE age != 27;

SELECT *
FROM person
WHERE favorite_color != 'red';

SELECT *
FROM person
WHERE favorite_color != 'red' AND favorite_color != 'blue';

SELECT *
FROM person
WHERE favorite_color = 'orange' OR favorite_color = 'green';

SELECT *
FROM person
WHERE favorite_color IN ('orange', 'green', 'blue');

SELECT *
FROM person
WHERE favorite_color IN ('yellow', 'purple');
