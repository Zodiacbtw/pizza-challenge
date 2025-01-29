import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Order from './components/order';
import Home from './components/home';
import React from 'react';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/order" component={Order} />
        </Switch>
      </Router>
    </>
  )
}

export default App
