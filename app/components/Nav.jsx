var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
            <div>
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">Playola</li>
              <li>
                <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
              </li>
              <li>
                <Link to="/countdown" activeClassName="active-link">Countdown</Link>
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