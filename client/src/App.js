import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home';
import Kittens from './components/Kittens';
import Doggos from './components/Doggos';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
        <Link to="/kittens">Kittens</Link>
        <Link to="/doggos">Doggos</Link>
        <h1>Die Kätzchen und Die Welpen</h1>
      </header>

      <Route path="/" exact render={() => <Home />} />
      <Route path="/kittens" component={Kittens} />
      <Route path="/doggos" component={Doggos} />

    </div>
  );
}

export default App;
