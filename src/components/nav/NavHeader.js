import React from 'react';
import './NavHeader.css';
import LoginModal from '../login/LoginModal.js';
import SignUpModal from '../login/SignUpModal.js';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";


function NavHeader(isLoggedIn) {
    const [loginModalShow, setLoginModalShow] = React.useState(false);
    const [SignUpModalShow, setSignUpModalShow] = React.useState(false);
    const loggedIn = (isLoggedIn) => {
        return isLoggedIn ?
        <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className='nav-link' as={Link} to="/">Home</Link>
                    <Link className='nav-link' as={Link} to="/Summary">Summary</Link>
                    <Link className='nav-link' as={Link} to="/Transactions">Transactions</Link>
                    <Link className='nav-link' as={Link} to="/Budgets">Budgets</Link>
                    <Link className='nav-link' as={Link} to="/About">About</Link>
                    <Link className='nav-link' as={Link} to="/Contact">Contact</Link>
                </Nav>
                <Button className="float-right" variant="secondary" >Logout</Button>
            </Navbar.Collapse>
            :
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className='nav-link' as={Link} to="/">Home</Link>
                    <Link className='nav-link' as={Link} to="/Summary">Summary</Link>
                    <Link className='nav-link' as={Link} to="/Transactions">Transactions</Link>
                    <Link className='nav-link' as={Link} to="/Budgets">Budgets</Link>
                    <Link className='nav-link' as={Link} to="/About">About</Link>
                    <Link className='nav-link' as={Link} to="/Contact">Contact</Link>
                </Nav>
                <Button variant="secondary" onClick={() => setLoginModalShow(true)}>Login</Button>
                <Button variant="primary" onClick={() => setLoginModalShow(true)}>Sign Up</Button>
            </Navbar.Collapse>
    }
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand to="/">Budget Buddy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {loggedIn(isLoggedIn)}
            <LoginModal
                show={loginModalShow}
                onHide={() => setLoginModalShow(false)}
            />
            <SignUpModal
                show={SignUpModalShow}
                onHide={() => setSignUpModalShow(false)}
            />
        </Navbar>
    );
}
export default NavHeader;