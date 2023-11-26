import { useState } from "react"; // Importing useState for state management
import axios from "axios"; // Importing axios for HTTP requests

function Create() {
    // State variables for storing the title, cover, and author of the new book
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submit action

        // Logging the entered values (for debugging purposes)
        console.log("Title: "+title+" Cover: "+cover+" Author: "+author);

        // Creating a book object with the state values
        const book = {
            title: title,
            cover: cover,
            author: author
        };

        // Making a POST request to the server to add a new book
        axios.post('http://localhost:4000/api/book', book)
        .then() // Placeholder for success handling
        .catch(); // Placeholder for error handling
    };

    // JSX for rendering the form
    return (
        <div>
            {/* Heading for the Create component */}
            <h2>Hello from create Component!</h2>

            {/* Form for book creation */}
            <form onSubmit={handleSubmit}>
                {/* Input field for book title */}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                {/* Input field for book cover URL */}
                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>

                {/* Input field for book author */}
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>

                {/* Submit button */}
                <div>
                    <input type="submit" value="Add Book"></input>
                </div>
            </form>
        </div>
    );
}
export default Create;
