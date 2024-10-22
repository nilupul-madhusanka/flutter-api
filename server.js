const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];

// GET route to fetch items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST route to add a new item
app.post('/items', (req, res) => {
  const newItem = { id: items.length + 1, name: req.body.name };
  items.push(newItem);
  res.status(201).json(newItem);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
