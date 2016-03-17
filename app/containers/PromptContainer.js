// containers handle the logic, presentational components handle the UI..
var React = require('react');
var Prompt = require('../components/Prompt');

// html saying Player 1 or 2
// Input field
// Continue button --> Player 2 or to Battle Route


// to give components state -> use getInitialState (want to tie up input field with inputted data to use)
// to tie to input field to state --> place value attribute on input element === value={this.state.username}
// promptContainer compo -> handles state, resetting state, routing, and presenting UI
// but want to separate container component from presentation component
  // so instead of rendering UI -> render ANOTHER COMPONENT that renders UI for it
    // require in Prompt component and copy/past all JSX logic that was in final render method below into Prompt component
    // prompt container is in charge of state and routing, but not in charge of rendering UI, just renders prompt component (UI logic vs business logic)
var PromptContainer = React.createClass({
  // context allows u to pass items to components w/o going thru props (works well only for reactrouter)
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    return {
      username: ''
    }
  },
  handleUpdateUser: function(e){
    // and then whenever input field changes (onChange) -> run the corresponding function to update this.state.username
    // use setState to update state
    // e.target.value === whatever is typed into input -> update state (username)
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function(e){
    e.preventDefault();
    // reset state in case click back
    var username = this.state.username;
    this.setState({
      username: ''
    });
    // if on playerTwo (aka if on routeParam playerOne) -> go to playerTwo route
    if(this.props.routeParams.playerOne){
      // dynamically change routes to battle

      // pass in obj if have query, state, etc
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
      // console.log(this.context)
    }
    else{
      // if on playerOne -> go to playerTwo
      // just pass new route
      this.context.router.push('/playerTwo/' + this.state.username)

      // console.log(this.context)
    }

  },

  // eventually want to tie up the button so that it brings user to next route -> use onSubmit method on the form element
  // need to specify what items to pass into Prompt
  render: function(){
    // console.log(this);
    // props that u pass to other components as functions have the 'on'prefix
    // and actual function itself has the handle 

    // also, we're passing in these props -> want them to be strongly typed so that warns when don't pass in correct type of info
    // PropTypes!
    return (
      <Prompt 
      onSubmitUser={this.handleSubmitUser}
      onUpdateUser={this.handleUpdateUser}
      header={this.props.route.header}
      username={this.state.username}/>
    )
  }
});

module.exports = PromptContainer;