import React, { Component } from 'react';
import './SideNav.scss';

class SideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <nav className="nav">
          <ul>
            <li>Some links</li>
            <li>Some links</li>
            <li>Some links</li>
            <li>Some links</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SideNav;
