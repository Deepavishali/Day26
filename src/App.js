import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Info from './Info.js';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  const [count, setCount] = useState(0);
  let increment = () => { setCount(count + 1) }
  let decrement = () => { setCount(count - 1) }
  return (
    <div>

      {/* Navbar */}

      <Navbar style={{ height: '80px' }} bg="light" expand="lg">
        <Container style={{ marginLeft: '200px' }} fluid>
          <Navbar.Brand href="#" style={{ fontWeight: 'bolder' }} >Start Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <NavDropdown title="Shop" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">All Products</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Popular Items
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  New Arrivals
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button variant="outline-dark" style={{ marginRight: '200px' }}> <ShoppingCartIcon />Cart {count}</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar />
      {/* Header */}
      <div class="jumbotron text-center" style={{ backgroundColor: 'black', height: '350px', color: 'white' }}>
        <p style={{ paddingTop: '110px', fontStyle: 'initial', fontSize: '60px', fontWeight: 'bolder' }}>Shop in Style</p>
        <p style={{ color: 'grey', fontSize: '20px', fontWeight: 'bolder' }}>With this shop homepage template</p>
      </div>
      <br />
      {/* Content */}
      <div>
        <Info increment={increment} decrement={decrement} />
      </div>
      {/* footer */}
      <div class="jumbotron text-center" style={{ backgroundColor: 'black', height: '150px', color: 'white' }}>
        <p style={{ color: 'white', fontSize: '20px', fontWeight: 'light', paddingTop: '50px', marginTop: '150px' }}>Copyright © Your Website 2022</p>
      </div>
    </div>
  );
}

export default App;