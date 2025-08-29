const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let items = [
  { id: 1, task: "Learn HTTP Methods" },
  { id: 2, task: "Build a REST API" }
];

app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("Item not found");
  res.json(item);
});

app.post("/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    task: req.body.task
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

app.put("/items/:id", (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("Item not found");

  item.task = req.body.task;
  res.json(item);
});

app.delete("/items/:id", (req, res) => {
  items = items.filter(i => i.id !== parseInt(req.params.id));
  res.send("Item deleted");
});

app.listen(port, () => {
  console.log(`✅ API running at http://localhost:${port}`);
});