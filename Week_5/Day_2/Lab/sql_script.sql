CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255),
    pass_word VARCHAR(255),
    email VARCHAR(255)
);

CREATE TABLE ingredients
(
    ingredients_id SERIAL PRIMARY KEY,
    ingredient_list TEXT
);

CREATE TABLE recipes
(
    recipe_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    recipe_name VARCHAR(255),
    ingredients_id INTEGER REFERENCES ingredients(ingredients_id),
    instructions TEXT,
    private_value BOOLEAN
);

CREATE TABLE groceries
(
    grocery_list_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    grocery_list_name VARCHAR(255),
    ingredients_id INTEGER REFERENCES ingredients(ingredients_id),
    grocery_list TEXT
);

CREATE TABLE occasions
(
    occasions_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    occasion_name VARCHAR(255),
    recipe_id INTEGER REFERENCES recipes(recipe_id)
);


INSERT INTO users
    (user_name, pass_word, email)
VALUES
    ('john', 'hello', 'john@email.com'),
    ('daniel', 'passwdwd', 'daniel@email.com'),
    ('eliot', 'dumbo', 'eliot@emial.com');

INSERT INTO ingredients
    (ingredient_list)
VALUES
    ('
    -spaghetti pasta
    -marinara sauce
    -meatballs
    '),
    ('
    -rice
    -soy sauce
    -vegetables
    '),
    ('
    -chicken wings
    -buffalo sauce
    -oil
    -teryaki sauce
    ');

INSERT INTO recipes
    (user_id, recipe_name, ingredients_id, instructions, private_value)
VALUES
    (1, 'spaghetti', 1, 'spaghetti instructions here', 'false'),
    (3, 'chicken wings', 3, 'chicken wing instructions here', 'true'),
    (3, 'fried rice', 2, 'fried rice instructions here', 'false');

INSERT INTO occasions
    (user_id, occasion_name, recipe_id)
VALUES
    (2, 'date', 1),
    (3, 'dinner', 3),
    (3, 'lunch', 2);

INSERT INTO groceries
    (user_id, grocery_list_name, grocery_list, ingredients_id)
VALUES
    (1, 'this week', 'toilet paper, toothpaste', 2),
    (2, 'for date', 'ingredient list', 1),
    (3, 'yummies', 'ingredient list', 3);
