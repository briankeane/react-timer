var React = require('react');
var {Link, IndexLink} = require('react-router');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: function () {
    return (
            <div>
              <Clock totalSeconds={129}/>
            </div>
      );
    }
});

module.exports = Countdown;