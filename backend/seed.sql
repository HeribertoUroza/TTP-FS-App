DROP DATABASE IF EXISTS ttp_fs_app;
CREATE DATABASE ttp_fs_app;

\c ttp_fs_app;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    balance INT NULL
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    ticker VARCHAR NOT NULL,
    amount INT NOT NULL,
    quantity INT NOT NULL,
    status VARCHAR NOT NULL,
    date TIMESTAMP DEFAULT NOW(),
    user_id INT REFERENCES users(id) 
);

CREATE TABLE portfolio (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    ticker VARCHAR NOT NULL,
    current_value INT,
    quantity INT,
    performance VARCHAR,
    user_id INT REFERENCES users(id)
);

INSERT INTO users 
    (full_name, email, balance)
VALUES
    ('f_name l_name', 'fl@email.com', 5000),
    ('full_name', 'full_N@email.com', 3456),
    ('John Smith', 'jsmith@email.com', 9879),
    ('Jane Doe', 'jdoe@email.com', 6899);

INSERT INTO transactions 
    (name, ticker, amount, quantity, status, user_id)
VALUES   
    ('transaction1', 'tran1', 2.99, 5, 'BOUGHT', 1),
    ('transaction2', 'tran1', 3.99, 5, 'SOLD', 1),
    ('transaction1', 'tran1', 5.99, 5, 'BOUGHT', 2),
    ('transaction2', 'tran1', 6.99, 5, 'SOLD', 2),
    ('transaction3', 'tran1', 7.99, 5, 'BOUGHT', 2),
    ('transaction1', 'tran1', 11.99, 5, 'BOUGHT', 3),
    ('transaction2', 'tran1', 632.99, 5, 'BOUGHT', 3),
    ('transaction1', 'tran1', 23.99, 5, 'SOLD', 4),
    ('transaction2', 'tran1', 209.99, 5, 'BOUGHT', 4);