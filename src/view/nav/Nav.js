import React from "react";
import "./nav.scss";
import { NavLink } from "react-router-dom";
class Nav extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="topNav">
          <NavLink to="/" activeClassName="active" exact={true}>
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/todo" activeClassName="active">
            Todos
          </NavLink>
          <NavLink to="/user" activeClassName="active">
            User
          </NavLink>
        </div>
      </>
    );
  }
}

export default Nav;
