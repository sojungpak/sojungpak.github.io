import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Counter from '../counter/counter';

const Welcome = (props) => {
  return <div>Welcome</div>;
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Nav = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/counter" component={Counter} />
      <Route exact path="/test/:id" component={Test} />
      <Route component={FallBack} />
    </Switch>
  );
};

export default Nav;
