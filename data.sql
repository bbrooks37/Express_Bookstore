-- Drop tables if they exist to ensure a clean slate
DROP TABLE IF EXISTS book_authors;
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS book_genres;
DROP TABLE IF EXISTS genres;
DROP TABLE IF EXISTS books;

-- Create books table
CREATE TABLE books (
    isbn VARCHAR(13) PRIMARY KEY,
    amazon_url TEXT,
    author TEXT,
    language TEXT,
    pages INTEGER,
    publisher TEXT,
    title TEXT,
    year INTEGER
);

-- Create genres table
CREATE TABLE genres (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

-- Create book_genres table for many-to-many relationship between books and genres
CREATE TABLE book_genres (
    book_isbn VARCHAR(13) NOT NULL REFERENCES books(isbn) ON DELETE CASCADE,
    genre_id INTEGER NOT NULL REFERENCES genres(id) ON DELETE CASCADE,
    PRIMARY KEY (book_isbn, genre_id)
);

-- Create authors table
CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL
);

-- Create book_authors table for many-to-many relationship between books and authors
CREATE TABLE book_authors (
    book_isbn VARCHAR(13) NOT NULL REFERENCES books(isbn) ON DELETE CASCADE,
    author_id INTEGER NOT NULL REFERENCES authors(id) ON DELETE CASCADE,
    PRIMARY KEY (book_isbn, author_id)
);

-- Insert initial data into books table
INSERT INTO books (isbn, amazon_url, author, language, pages, publisher, title, year)
VALUES ('123432122', 'https://amazon.com/taco', 'Elie', 'English', 100, 'Nothing publishers', 'my first book', 2008);

-- Insert initial data into genres table
INSERT INTO genres (name)
VALUES ('Science Fiction'), ('Fantasy'), ('Mystery');

-- Insert initial data into authors table
INSERT INTO authors (name)
VALUES ('Isaac Asimov'), ('J.K. Rowling'), ('Agatha Christie');

-- Insert initial data into book_genres table
INSERT INTO book_genres (book_isbn, genre_id)
VALUES ('123432122', 1), ('123432122', 2);

-- Insert initial data into book_authors table
INSERT INTO book_authors (book_isbn, author_id)
VALUES ('123432122', 1);
