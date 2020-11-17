import React from "react";
import { Row, Card, Table, Button, Col } from "react-bootstrap";
import Piechart from "../components/Charts/Piechart.js";
import BudgetUsageGraph from "../components/Charts/BudgetUsageGraph.js";
function Summary() {
  return (
    <div className="Summary">
      <h1>Summary</h1>
      <Row>
        <Col>
          <Piechart />
        </Col>
        <Col>
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
        </Col>
        <Col>
          <BudgetUsageGraph />
        </Col>
      </Row>
    </div>
  );
}
export default Summary;
