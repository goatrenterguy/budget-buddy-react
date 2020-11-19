import React, { Component } from "react";
import "./css/App.css";

import NavHeader from "./components/nav/NavHeader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NoMatch from "./Pages/NoMatch";
import Layout from "./components/Layout";
import Summary from "./Pages/Summary";
import Transactions from "./Pages/Transactions";
import Budgets from "./Pages/Budgets";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavHeader auth={this.props.auth} />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Summary" component={Summary} />
              <Route exact path="/Transactions" component={Transactions} />
              <Route exact path="/Budgets" component={Budgets} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
