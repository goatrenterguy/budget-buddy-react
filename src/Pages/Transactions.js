import React from "react";
import { Row, Form, Table, Button, Col, FormGroup } from "react-bootstrap";

function Transactions() {
  return (
    <div className="Transactions">
      <h1 className="ml-0">Transactions</h1>
      <Row className="mt-3 ml-0 mr-0">
        <Form onSubmit={this}>
          <Form.Group controlId="transactionForm.Type" inline>
            <Form.Label>Transaction type</Form.Label>
            <Form.Control as="select">
              <option value="income">Income</option>
              <option value="housing">Housing</option>
              <option value="transportation">Transportation</option>
              <option value="food">Food</option>
              <option value="utilities">Utilities</option>
              <option value="medical">Medical/Healthcare</option>
              <option value="insurance">Insurance</option>
              <option value="personal">Personal</option>
              <option value="debt">Debt Payments</option>
              <option value="entertainment">Entertainment</option>
              <option value="miscellaneous">Miscellaneous</option>
            </Form.Control>
          </Form.Group>
          <Form.Check inline type={"checkbox"} label="Recurring"></Form.Check>
          <Form.Group controlId="transactionForm.Name">
            <Form.Label>Transaction Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter transaction name here"
            />
          </Form.Group>
          <Form.Group controlId="transactionForm.Date">
            <Form.Label>Transaction Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group controlId="transactionForm.Amount">
            <Form.Label>Transaction Amount</Form.Label>
            <Form.Control type="number" placeholder="0" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
      <Row className="mt-3">
        <h2>All Transactions</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Town & Country</td>
              <td>10/16/2020</td>
              <td>$85.21</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Car Payment</td>
              <td>10/01/2020</td>
              <td>$350</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </div>
  );
}
export default Transactions;
