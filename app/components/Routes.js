import React from 'react';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

import { Route, Link } from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
      <div>
        <nav><h1>Hello Gorgeous!&nbsp;<span class="lipstick">💄 </span></h1>
          &nbsp;&nbsp; 
          <Link to="/"> &nbsp;<span>Home </span>&nbsp;</Link>  
          <Link to="/tutorials"> &nbsp;<span>Tutorials </span>&nbsp;</Link>
          <Link to="/products"> &nbsp;<span> Products </span>&nbsp;</Link>
          <Link to="/trending"> &nbsp;<span> What's Trending? </span>&nbsp;</Link>
        </nav>
        <main>
          <h2>
            MAKEHub for Tutorials, Product Reviews, and the Latest Trends
          </h2>

        </main>
      </div>
    </Router>
  );
};

export default Routes;