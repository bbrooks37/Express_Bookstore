const bookSchemaUpdate = {
  type: "object",
  properties: {
    amazon_url: { type: "string", format: "url" },
    author: { type: "string", minLength: 1 },
    language: { type: "string", minLength: 1 },
    pages: { type: "integer", minimum: 1 },
    publisher: { type: "string", minLength: 1 },
    title: { type: "string", minLength: 1 },
    year: { type: "integer", minimum: 0, maximum: new Date().getFullYear() }
  },
  additionalProperties: false
};

module.exports = bookSchemaUpdate;
