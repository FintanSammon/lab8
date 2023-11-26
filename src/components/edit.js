import React from 'react';
import { useParams } from 'react-router-dom'; // To access URL parameters
import { useState, useEffect } from 'react'; // Hooks for state and lifecycle management
import axios from 'axios'; // Axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Hook for programmatic navigation

export default function Edit(props) {
    // Retrieves the 'id' parameter from the URL
    let { id } = useParams();

    // State variables to store book details
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");
    const [author, setAuthor] = useState("");

    // Hook to programmatically navigate to other routes
    const navigate = useNavigate();

    // useEffect to fetch book data when component mounts
    useEffect(() => {
        // Fetching book details from the server using Axios
        axios.get('http://localhost:4000/api/book/' + id)
            .then((response) => {
                // Updating state variables with the fetched data
                setTitle(response.data.title);
                setCover(response.data.cover);
                setAuthor(response.data.author);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]); // Dependency array includes 'id' to re-run useEffect if id changes

    // Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Constructing new book object from state
        const newBook = {
            id: id,
            title: title,
            cover: cover,
            author: author
        };

        // Sending updated book data to the server
        axios.put('http://localhost:4000/api/book/' + id, newBook)
            .then((res) => {
                console.log(res.data);
                // Navigate to the 'read' route after successful update
                navigate('/read');
            });
    };

    // JSX for rendering the edit form
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Input fields for editing book details */}
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add Release Year: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => setCover(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add Poster Url: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                {/* Submit button */}
                <div className="form-group">
                    <input type="submit" value="Edit Book" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}
