// Importing the Card component from react-bootstrap for UI styling
import Card from 'react-bootstrap/Card';
// Importing Link from react-router-dom for navigation
import {Link} from 'react-router-dom';

// BookItem component definition
function BookItem(props) {
    return (
        <div>
            {/* Card component from react-bootstrap to display book details */}
            <Card>
                {/* Displaying the title of the book in Card's Header */}
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    {/* Blockquote for styling the content inside the Card's Body */}
                    <blockquote className="blockquote mb-0">
                        {/* Displaying the cover image of the book */}
                        <img src={props.myBook.cover} alt={props.myBook.title}></img>
                        {/* Footer to display the author's name */}
                        <footer>
                            {props.myBook.author}
                        </footer>
                    </blockquote>
                </Card.Body>
                {/* Link to navigate to the edit page for the book */}
                <Link to={"/edit/"+props.myBook._id} className='btn btn-primary'>Edit</Link>
            </Card>

            {/* Commented out alternative layout for book item */}
            {/* <h3>{props.myBook.title}</h3>
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors[0]}</p> */}
        </div>
    );
}

export default BookItem;
