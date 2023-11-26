// Importing the BookItem component for individual book display
import BookItem from "./bookItem";

// Books component definition, takes props as an argument
function Books(props) {

    // The component maps over the array of books passed in through props
    return props.myBooks.map(
        (book) => {
            // For each book in the array, a BookItem component is rendered
            // The book data is passed to BookItem as a prop
            // The key prop is important for React's rendering performance, it uses book._id as a unique identifier for each book
            return <BookItem myBook={book} key={book._id}></BookItem>
        }
    );
}

// Exporting the Books component for use in other parts of the app
export default Books;
