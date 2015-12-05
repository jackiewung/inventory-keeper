var React = require('react');
var ReactDOM = require('react-dom');
var Homepage = require('../homepage/homepage.js')
var Userpage = require('../userpage/userpage.js')

var Main = React.createClass({

  getInitialState: function() {
    return {
      hasToken: false
    }
  },

  checkToken: function() {
    var jwt = window.localStorage.getItem('access_token');
    jwt ? this.setState({ hasToken: true }) : console.log('sorry');
  },

  componentWillMount: function() {
    this.checkToken();
  },

  tokenTrue: function(input) {
    input ? this.setState({ hasToken: true }) : null;
  },

  render: function() {
    //the main page is used to check which view to display
    //depending on whether or not there is a token in local storage
    return (
      <div>
        {this.state.hasToken ? <Userpage /> : <Homepage tokenCreated={this.tokenTrue} />}
      </div>
    )
  }

});

ReactDOM.render(<Main />, document.getElementById('app'));