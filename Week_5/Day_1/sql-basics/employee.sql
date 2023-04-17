SELECT first_name, last_name
FROM employee
WHERE city = 'Calgary';

SELECT MAX(birth_date)
FROM employee;

SELECT MIN(birth_date)
FROM employee;

SELECT *
FROM employee
WHERE reports_to = 2;

SELECT city, COUNT(*)
FROM employee
GROUP BY city;
