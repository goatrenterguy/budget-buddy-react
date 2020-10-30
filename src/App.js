import React, { Component } from 'react';
import './App.css';

import NavHeader from './components/nav/NavHeader';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NoMatch from './NoMatch';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavHeader auth={this.props.auth}/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/Contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    )
  }
}

export default App;
