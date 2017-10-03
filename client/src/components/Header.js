import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="blue darken-2">
        <div className="nav-wrapper">
          <a className="brand-logo center">Emily</a>
          <ul className="right">
            <li><a>Login With Google</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
