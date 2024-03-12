const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://127.0.0.1:27017/new')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));
  const port = 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));

app.use(bodyParser.json());
const routes = require('./routes');

app.use('/api', routes);

