import React, { useState, useEffect } from "react";
import { getBooks } from "./api";

function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const books = await getBooks();
      setBooks(books);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.isbn}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BooksList;
