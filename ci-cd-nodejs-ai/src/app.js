const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from AI-Powered Smart CI/CD!');
});

let server;

// Only start the server when we're not in the test environment
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = { app, server };  // Export both app and server for tests
