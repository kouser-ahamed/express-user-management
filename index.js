const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
  { id: 3, name: 'Jim Doe', email: 'jim@example.com' },
  { id: 4, name: 'Jack Doe', email: 'jack@example.com' }
];
app.get('/users', (req, res) => {
  res.send(users);
  
});
app.post('/users', (req, res) => {

  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send({ success: true,data:newUser, message: 'User created successfully' });
  
});

app.get('/products', (req, res) => {
  res.send('products are available in our website');
});
app.get('/contact', (req, res) => {  res.send('contact us for more information');
});
app.get('/about', (req, res) => {  res.send('about us page');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});