var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;

// functional stateless components
// don't have any state in this particular component (just a render and proptypes)
// if only rendering UI -> no need to use React.createClass, just make it a func w/ 'props' as argument passed in... (remove this.props from w/in)

var Prompt = function (props){
  return (
    <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
      <h1>{props.header}</h1>
      <div className="col-sm-12">
        <form onSubmit={props.onSubmitUser}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Github Username"
              onChange={props.onUpdateUser}
              value={props.username}
              type="text" />
          </div>
          <div className="form-group col-sm-4 col-sm-offset-4">
            <button
              className="btn btn-bloc btn-success"
              type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// so that correct type is used to pass into component, use propTypes
// serves as a kind of documentation, no the kinds of items this component needs
Prompt.propTypes = {
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    onSubmitUser: PropTypes.func.isRequired
};



module.exports = Prompt;
