import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="brand-logo">Emily</a>
          <ul className="right">
            <li><a>Login With Google</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
