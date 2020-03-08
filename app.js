const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Nice work, Jonathan!');
});

app.get('/demo', (req, res) => {
  res.set('X-Full-Stack', '4-life');
  res.status(418);
  res.send('I prefer coffee');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
