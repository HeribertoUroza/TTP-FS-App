DROP DATABASE IF EXISTS ttp_fs_app;
CREATE DATABASE ttp_fs_app;

\c ttp_fs_app;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    balance INT NULL
);
