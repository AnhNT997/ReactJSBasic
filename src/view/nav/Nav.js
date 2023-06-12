import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
class Nav extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="topNav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/todo">Todos</Link>
        </div>
      </>
    );
  }
}

export default Nav;
