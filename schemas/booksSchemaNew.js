const bookSchemaNew = {
  type: "object",
  properties: {
    isbn: { type: "string", minLength: 10, maxLength: 13 },
    amazon_url: { type: "string", format: "url" },
    author: { type: "string", minLength: 1 },
    language: { type: "string", minLength: 1 },
    pages: { type: "integer", minimum: 1 },
    publisher: { type: "string", minLength: 1 },
    title: { type: "string", minLength: 1 },
    year: { type: "integer", minimum: 0, maximum: new Date().getFullYear() }
  },
  required: ["isbn", "amazon_url", "author", "language", "pages", "publisher", "title", "year"],
  additionalProperties: false
};

module.exports = bookSchemaNew;
