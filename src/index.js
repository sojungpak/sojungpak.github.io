import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import App from './components/App';

// we now wrap App in a Provider
ReactDOM.render(<App />, document.getElementById('main'));
