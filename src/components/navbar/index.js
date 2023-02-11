import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './style.scss';
import Work from '../WORK';
import Play from '../PLAY';
import About from '../ABOUT';

const Test = (props) => {
  return <div>{props.match.params.id}</div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const NavSwitch = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Work} />
      <Route exact path="/play" component={Play} />
      <Route exact path="/about" component={About} />
      <Route exact path="/work/:id" component={Test} />
      <Route component={FallBack} />
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
      <NavLinks />
      <NavSwitch />
    </div>
  );
};

export default Navbar;
