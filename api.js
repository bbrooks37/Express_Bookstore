const axios = require("axios");

const BASE_URL = "http://localhost:3000"; // Adjust URL as needed

async function getBooks() {
  const response = await axios.get(`${BASE_URL}/books`);
  return response.data.books;
}

async function createBook(book) {
  const response = await axios.post(`${BASE_URL}/books`, book);
  return response.data.book;
}

// Export the functions
module.exports = { getBooks, createBook };
