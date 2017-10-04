import React, { Component } from "react";
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case undefined:
        return 'im loggedout';
      default:
        return 'im loggged in';
    }
  }
  render() {
      console.log(this.props.auth);
    return (
      <nav className="blue darken-2">
        <div className="nav-wrapper">
          <a className="brand-logo center">Emily</a>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
