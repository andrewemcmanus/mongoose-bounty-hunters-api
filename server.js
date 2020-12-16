const cors = require('cors');
const express = require('express');
const app = express();
require('dotenv').config()
const models = require('./models');

// express body parser as middleware!
app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: false}))
// parse the body data as JSON
app.use(express.json())
app.use('/bounties', require('./controllers/bountiesController'));

app.get('/', (req, res) => {
  res.send('hello from root')
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
})
