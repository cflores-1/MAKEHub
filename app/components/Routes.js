import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import {Home} from './Home'
import { Route, Link } from 'react-router-dom'
import {Products} from './Products'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav><h1>Hello Gorgeous!&nbsp;<span class="lipstick">💄 </span></h1>
          &nbsp;&nbsp; 
          <Link to="/"> &nbsp;<span>Home </span>&nbsp;</Link>  
          <Link to="/tutorials"> &nbsp;<span>Tutorials </span>&nbsp;</Link>
          <Link to="/products"> &nbsp;<span> Products </span>&nbsp;</Link>
          <Link to="/trending"> &nbsp;<span> Trending </span>&nbsp;</Link>
        </nav>
        <main>
          <h2>
            MAKEHub is your one stop shop for all your makeup questions
          </h2>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/products" component={Products} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
