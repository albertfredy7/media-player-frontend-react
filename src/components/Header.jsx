import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-dark">
        <Container>
            <Navbar.Brand href="/">
            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
                <i class="fa-solid fa-video fa-beat text-warning me-3 fa-2x"></i>{' '}
                    <span style={{color:'white',fontSize:'24px'}}>Video Player</span>
            </Link>
            </Navbar.Brand>
        </Container>
  </Navbar>
  )
}

export default Header