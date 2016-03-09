var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');


var ConfirmBattleContainer = React.createClass({
  // in order to handle routing in this container --> contextTypes
  contextTypes:{
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    console.log('getInitialState');
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount: function(){
    console.log('componentWillMount');
  },
  componentDidMount: function(){
    // want to bind to THIS this...
    var query = this.props.location.query;
    // grab usernames to fetch info from github api then update the state and after fetch change isLoading to false
    // passing an array of usernames
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function(players){
        // when promise resolves...
        // want to set the state!
        this.setState({
          isLoading: false,
          playersInfo: [players[0], players[1]]
        })
        // console.log('players - ', players);
      }.bind(this));
      // use .bind to set the context of this (on this.setState) so that it's the same context as the 'this' w/in componentDidMount (as opposed to context of the inner function)
  },
  componentWillReceiveProps: function(){
    console.log('componentWillReceiveProps');
  },
  componentWillUnmount: function(){
    console.log('componentWillUnmount');
  },
  render: function(){
    return (
      <ConfirmBattle isLoading={this.state.isLoading} playersInfo={this.state.playersInfo} />
    )
  }
});
module.exports = ConfirmBattleContainer;