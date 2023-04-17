CREATE TABLE orders
(
    order_id SERIAL PRIMARY KEY,
    person_id INTEGER NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    product_price FLOAT NOT NULL,
    quantity INTEGER NOT NULL
);

INSERT INTO orders
    (product_name,product_price,quantity)
VALUES
    ('chicken wings', 12, 1),
    ('spaghetti', 10, 1);

SELECT *
FROM orders;

SELECT SUM(quantity)
FROM orders;

SELECT SUM(product_price)
FROM orders;

SELECT SUM(product_price)
FROM orders
WHERE person_id = 2;