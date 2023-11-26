import { useEffect, useState } from "react"; // Importing useEffect for side effects and useState for state management
import axios from "axios"; // Axios for making HTTP requests
import Books from "./books"; // Importing the Books component

function Read() {
    // State to store the array of books
    const [data, setData] = useState([]);

    // useEffect hook to fetch data when the component mounts
    useEffect(
        () => {
            // Making a GET request to fetch books data
            axios.get('http://localhost:4000/api/books')
            .then(
                (response) => {
                    // Updating the state with the fetched data
                    setData(response.data)
                }
            )
            .catch(
                (error) => {
                    // Logging any errors if the request fails
                    console.log(error);
                }
            )
        }, 
        [] // Empty dependency array means this effect runs once on mount
    );

    // Rendering the component
    return (
        <div>
            {/* Displaying a heading */}
            <h2>Hello from Read Component!</h2>
            {/* Passing the fetched books data to the Books component */}
            <Books myBooks={data}></Books>
        </div>
    );
}

export default Read;
