const db = require('../db');

exports.getBooks = (req, res) => {
  const books = db.read('books.json');
  res.send(books);
};

exports.addBook = (req, res) => {
  const { title, author, price } = req.body;
  if (!title || !author || !price) {
    return res.status(400).send({ message: "All fields required" });
  }

  const books = db.read('books.json');
  const newBook = {
    id: books.length ? books[books.length-1].id + 1 : 1,
    title,
    author,
    price: Number(price)
  };

  books.push(newBook);
  db.write("books.json", books);

  res.send({ message: "Book added successfully", book: newBook });
};
