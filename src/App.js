import React from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import './css/navbarStyle.css';
import Home from './components/Home';
import Admin from './components/Admin';
import User from './components/User';
import NoMatch from './components/NoMatch';

const Header = () => {
  return (
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/userpage">User page</NavLink></li>
      <li><NavLink activeClassName="active" to="/adminpage">Admin page</NavLink></li>
    </ul>
  );
};


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/userpage">
          <User/>
        </Route>
        <Route path="/adminpage">
          <Admin/>
        </Route>
        <Route>
          <NoMatch/>
        </Route>
      </Switch>
    </div>
  )
}
export default App;
