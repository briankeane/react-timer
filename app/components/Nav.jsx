var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
            <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Timer App</li>
              <li>
                <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
              </li>
              <li>
                <IndexLink to="/" activeClassName="active-link">Countdown</IndexLink>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                <p>Created by <a href="/" target="_blank">Brian Keane</a></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      );
  };

module.exports = Nav;