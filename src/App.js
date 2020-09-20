import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const PGPage = () => (
  <div>
    <h1>PGPage</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/pg' component={PGPage} />
      </Switch>
    </div>
  );
}

export default App;
