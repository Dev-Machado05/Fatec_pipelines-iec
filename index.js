console.log("Index.js funcionando...");

const express = require('express');
const app = express();

// Rota principal
app.get('/', (req, res) => {
  res.send(`
    <h1>api funcionando</h1>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
