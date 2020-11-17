import React, { Component } from 'react';
import './css/App.css';

import NavHeader from './components/nav/NavHeader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NoMatch from './Pages/NoMatch';
import Layout from './components/Layout';
import Summary from './Pages/Summary';
import Transactions from './Pages/Transactions';
import Budgets from './Pages/Budgets';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavHeader auth={this.props.auth}/>
        <Layout>
          <Router>
            <Switch>
              <Route  path="/" component={Home} />
              <Route  path="/about" component={About} />
              <Route  path="/Contact" component={Contact} />
              <Route  path="/Summary" component={Summary} />
              <Route  path="/Transactions" component={Transactions} />
              <Route  path="/Budgets" component={Budgets} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App;
