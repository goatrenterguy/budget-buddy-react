import React from "react"
import '../css/Home.css'
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
                        Budget Buddy is for people like you. People who want control over their money choose us because we never ask for your bank account or credit card information. And best of all? It's completely free. You can make as many budgets as you want and we'll never charge you a cent.
					</p>
                </Col>
            </Row>
        </div>
    );
}

export default Home;
