import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';

import "./App.css";

export default function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/">
        <LoginForm />
      </Route>
      <Route path="/form-redux">
        <Profile />
      </Route>
    </Switch>
  </Router>
  );
}
