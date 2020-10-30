import React from "react"
import './Home.css'
const { Row, Card, Form, Button, Col } = require("react-bootstrap");
function Home() {
    return (
        <div className="Home">
            <Row>
                <Col id="HomeBanner"/>
            </Row>
            <Row className="mt-3">
                <Col xs={4}>
                    <Card className="p-3">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Card>
                </Col>
                <Col>
					<p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in.
					</p>
                </Col>
            </Row>
        </div>
    );
}

export default Home;