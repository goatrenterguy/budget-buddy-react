import React from 'react';
import './NavHeader.css';
import LoginModal from '../login/LoginModal.js';
import SignUpModal from '../login/SignUpModal.js';
import { Nav, Navbar, Button } from 'react-bootstrap';


function NavHeader(isLoggedIn) {
    const [loginModalShow, setLoginModalShow] = React.useState(false);
    const [SignUpModalShow, setSignUpModalShow] = React.useState(false);
    const loggedIn = (isLoggedIn) => {
        return isLoggedIn ?
        <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Summary">Summary</Nav.Link>
                    <Nav.Link href="/Transactions">Transactions</Nav.Link>
                    <Nav.Link href="/Budgets">Budgets</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
                <Button className="float-right" variant="secondary" >Logout</Button>
            </Navbar.Collapse>
            :
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
                <Button variant="secondary" onClick={() => setLoginModalShow(true)}>Login</Button>
                <Button variant="primary" onClick={() => setLoginModalShow(true)}>Sign Up</Button>
            </Navbar.Collapse>
    }
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Budget Buddy</Navbar.Brand>
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