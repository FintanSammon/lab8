// Importing CSS and Bootstrap for styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing custom components
import Content from './components/content';
import Footer from './components/footer';
import Header from './components/header';

// Importing components from react-bootstrap for UI layout
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Importing components from react-router-dom for routing
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Importing components for different pages
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';

// Main App component
function App() {
  return (
    // Using BrowserRouter for SPA routing
    <BrowserRouter>
      <div className="App">
        {/* Navbar setup with react-bootstrap components */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            {/* Navigation links */}
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Routes for navigating between different components */}
        <Routes>
          <Route path='/' element={<Content />}></Route>
          <Route path='/read' element={<Read />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
        </Routes>

        {/* Footer component */}
        {/* <Header />
        <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
