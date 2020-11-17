import React from "react";
import { Row, Form, Table, Button, Col, FormGroup } from "react-bootstrap";

function budgets() {
  return (
    <div className="Bu">
      <h1 className="ml-0">Budgets</h1>
      <Row className="mt-3 ml-0 mr-0">
        <Form onSubmit={this}>
          <Form.Row>
          <Form.Group as={Col} sx={2} controlId="budgetForm.Type" inline>
            <Form.Label>Budget type</Form.Label>
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
          <Form.Group as={Col} sx={7} controlId="budgetForm.Name">
            <Form.Label>Budget Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter budget name here"
            />
          </Form.Group>
          <Form.Group as={Col} sx={1} controlId="budgetForm.Amount">
            <Form.Label>Budget Amount</Form.Label>
            <Form.Control type="number" placeholder="0" />
          </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
      <Row className="mt-3 mr-0 ml-0">
        <h2>All budgets</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Spent</th>
              <th>Bugeted</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Grocceries</td>
              <td>$85.21</td>
              <td>$200.00</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Debt Payments</td>
              <td>$750.00</td>
              <td>$1000.00</td>
            </tr>
          </tbody>
        </Table>
      </Row>
    </div>
  );
}
export default budgets;
