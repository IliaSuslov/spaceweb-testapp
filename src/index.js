import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";

import './index.css';
import reportWebVitals from './reportWebVitals';

import Menu from './components/Menu/Menu'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Account from './pages/Account/Account'
import Journal from './pages/Journal/Journal'
import Domains from './pages/Domains/Domains'
import VPS from './pages/VPS/VPS'

function App() {
  return (
    <Router>
      <div className="container">
        <Menu />
        <div className="header">
          <Header />

          <div className="content">
            <Switch>
              <Route path='/account'>
                <Account />
              </Route>
              <Route path='/journal'>
                <Journal />
              </Route>
              <Route path='/domains' >
                <Domains />
              </Route>
              <Route path='/vps'>
                <VPS />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <div style={{ margin: '2%' }}>
        <Footer />
      </div>
    </Router>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
