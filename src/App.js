import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import UnController from './components/UncontrollerForm';
import CustomRegister from './components/CustomRegister';
import Example from "./components/Example";

import Menu from './components/menu/Menu';
import "./App.css";

export default function App() {
  return (
  <Router>
    <Menu />

    <Switch>
      <Route exact path="/">
        <LoginForm />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/ex">
        <Example />
      </Route>
      <Route path="/unController">
        <UnController />
      </Route>
      <Route path="/lv">
        <CustomRegister />
      </Route>
    </Switch>
  </Router>
  );
}
