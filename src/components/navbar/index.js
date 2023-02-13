import React, { useState } from 'react';
import {
  Switch, Route, NavLink, Redirect,
} from 'react-router-dom';
import './style.scss';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import Work from '../screens/WORK';
import Play from '../screens/PLAY';
import About from '../screens/ABOUT';

const Test = (props) => {
  return <div>{props.match.params.id}</div>;
};

const Error = () => {
  return <Redirect exact to="/" />;
};

const NavSwitch = (props) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Work mobile={props.mobile} />} />
      <Route exact path="/play" render={() => <Play mobile={props.mobile} />} />
      <Route exact path="/about" render={() => <About mobile={props.mobile} />} />
      <Route exact path="/work/:id" component={Test} />
      <Route component={Error} />
    </Switch>
  );
};

const MobileNav = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <div id="navMobileRow">
      <div id="menuIcon">
        <FiMenu onClick={() => setClicked(true)} />
      </div>

      <ul className={clicked ? 'navMenu active' : 'navMenu'}>
        <div id="closeIcon">
          <IoMdClose onClick={() => setClicked(false)} />
        </div>

        <li><NavLink to="/" exact onClick={() => setClicked(false)}>WORK</NavLink></li>
        <li><NavLink to="/play" onClick={() => setClicked(false)}>PLAY</NavLink></li>
        <li><NavLink to="/about" onClick={() => setClicked(false)}>ABOUT</NavLink></li>
      </ul>
    </div>
  );
};

const NavLinks = (props) => {
  return (
    <nav id={props.mobile ? 'navMobile' : 'nav'}>
      <a href="/" aria-label="home"><div id="logo" /></a>
      {props.mobile ? <MobileNav />
        : (
          <ul>
            <li><NavLink to="/" exact>WORK</NavLink></li>
            <li><NavLink to="/play">PLAY</NavLink></li>
            <li><NavLink to="/about">ABOUT</NavLink></li>
          </ul>
        )}
    </nav>
  );
};

const Navbar = (props) => {
  return (
    <div id="app">
      <NavLinks mobile={props.mobile} />
      <NavSwitch mobile={props.mobile} />
    </div>
  );
};

export default Navbar;
