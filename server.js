require('dotenv').config();
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Too close to the stars');
});

app.listen(3000, () => {
  console.log('coolin on port 3000');
  console.log(`Your secret is: ${process.env.SECRET_PASSWORD}`)
});
