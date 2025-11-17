const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'peer_push')));

// Serve home page on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'peer_push', 'home', 'index.html'));
});

// Handle sign up
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  let users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

  const userExists = users.find(u => u.username === username);
  if (userExists) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  users.push({ username, email, password });
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
  res.json({ message: 'Signup successful' });
});

// Handle sign in
app.post('/signin', (req, res) => {
  const { username, password } = req.body;
  let users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ message: 'Signin successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
