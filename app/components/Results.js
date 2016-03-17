var React = require('react');
var PropTypes = React.PropTypes;

var puke = function(obj){
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

var Results = function(props){
  return (
    <div> Results: {puke(props)} </div>
  )
};

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;