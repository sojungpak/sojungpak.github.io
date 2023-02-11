import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

import Navbar from './navbar';

const App = (props) => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
