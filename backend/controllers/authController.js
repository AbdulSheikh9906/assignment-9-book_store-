const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  const users = db.read('users.json');

  if (users.find(u => u.email === email)) {
    return res.status(409).send({ message: 'Email already registered' });
  }

  const hashed = bcrypt.hashSync(password, 8);

  const newUser = {
    id: users.length + 1,
    name,
    email,
    password: hashed
  };

  users.push(newUser);
  db.write('users.json', users);

  res.status(201).send({ message: 'User registered successfully' });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const users = db.read('users.json');
  const user = users.find(u => u.email === email);

  if (!user) return res.status(404).send({ message: 'User not found' });

  const valid = bcrypt.compareSync(password, user.password);
  if (!valid) return res.status(401).send({ message: 'Invalid password' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.send({ token, user: { id: user.id, name: user.name, email: user.email } });
};
