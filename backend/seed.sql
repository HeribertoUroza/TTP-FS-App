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