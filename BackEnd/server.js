// Importing the express module
const express = require('express');
// Initializing the express application
const app = express();
// Defining the port number for the server
const port = 4000;
// Importing the CORS module to enable cross-origin requests
const cors = require('cors');

// Enabling CORS for all requests
app.use(cors());
// Custom middleware to set various headers for CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Importing the body-parser module to parse request bodies
const bodyParser = require("body-parser");

// Configuring body-parser as middleware to handle form data and JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importing Mongoose for MongoDB interaction
const mongoose = require('mongoose');

// Connecting to MongoDB and handling connection errors
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://...'); // MongoDB connection string
}

// Defining a schema for the 'book' collection
const bookSchema = new mongoose.Schema({
  title:String,
  cover:String,
  author:String
});

// Creating a model for the book schema
const bookModel = mongoose.model('my_books', bookSchema);

// POST endpoint to create a new book
app.post('/api/book', (req,res)=>{
    console.log(req.body);

    bookModel.create(req.body)
    .then(()=>{ res.send("Book Created")})
    .catch(()=>{ res.send("Book NOT Created")});
});

// Default route to send a basic response
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// GET endpoint to retrieve all books
app.get('/api/books', async(req, res)=>{
  let books = await bookModel.find({});
  res.json(books);
});

// GET endpoint to retrieve a book by its identifier
app.get('/api/book/:identifier', async(req,res)=>{
  console.log(req.params.identifier);

  let book = await bookModel.findById(req.params.identifier);
  res.send(book);
});

// PUT endpoint to update a book by its identifier
app.put('/api/book/:identifier' , async(req, res)=>{
  console.log("Edit: "+req.params.identifier);

  let book = await bookModel.findByIdAndUpdate(req.params.identifier, req.body, {new:true});
  res.send(book);
});

// Starting the server and listening on the defined port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
