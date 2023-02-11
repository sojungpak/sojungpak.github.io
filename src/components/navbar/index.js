import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './style.scss';
import Work from '../screens/WORK';
import Play from '../screens/PLAY';
import About from '../screens/ABOUT';

const Test = (props) => {
  return <div>{props.match.params.id}</div>;
};

const NavSwitch = (props) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Work />} />
      <Route exact path="/play" component={Play} />
      <Route exact path="/about" render={() => <About mobile={props.mobile} />} />
      <Route exact path="/work/:id" component={Test} />
      <Route component={Work} />
    </Switch>
  );
};

const NavLinks = (props) => {
  return (
    <nav>
      <div id="logo" />
      <ul>
        <li><NavLink to="/" exact>WORK</NavLink></li>
        <li><NavLink to="/play">PLAY</NavLink></li>
        <li><NavLink to="/about">ABOUT</NavLink></li>
      </ul>
    </nav>
  );
};

const Navbar = (props) => {
  return (
    <div>
      <NavLinks mobile={props.moblile} />
      <NavSwitch mobile={props.mobile} />
    </div>
  );
};

export default Navbar;
