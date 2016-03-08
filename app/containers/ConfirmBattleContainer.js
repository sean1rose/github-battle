var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');


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
    console.log('componentDidMount');
    var query = this.props.location.query;
    // grab usernames to fetch info from github api then update the state and after fetch change isLoading to false
    console.log('QUERY', query);
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