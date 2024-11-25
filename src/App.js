import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar expand='lg' className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to='/' className='navbar-brand text-success d-flex align-items-center'>
              <FontAwesomeIcon icon={faUtensils} size='xl' />
              <span className='ms-3 lh-1 fw-semibold'>
                React
                <br></br>
                Restaurant
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basiv-navbar-nav'>
            <Nav className='me-auto justify-content-center w-100'>
              <Link to='/' className='nav-link text-uppercase text-success text-center'>Home</Link>
              <Link to='/menu' className='nav-link text-uppercase text-success text-center'>Menu</Link>
              <Link to='/about' className='nav-link text-uppercase text-success text-center'>About</Link>
              <Link to='/contact' className='nav-link text-uppercase text-success text-center'>Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
