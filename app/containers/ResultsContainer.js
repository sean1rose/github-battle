var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
  getInitialState: function(){
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function(){
    console.log(this.props.location.state.playersInfo);
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores){
        this.setState({
          scores: scores,
          isLoading: false
        })
        // remember that this on ln 15 is w/in a callback, so diff contexxt, need to bind to prev this context
      }.bind(this))
  },
  render: function(){
    return (
      <Results 
      isLoading={this.state.isLoading}
      playersInfo={this.props.location.state.playersInfo}
      scores={this.state.scores}/>
    );
  }
});

module.exports = ResultsContainer;