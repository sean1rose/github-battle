var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Home = require('../components/Home');
var PromptContainer = require('../containers/PromptContainer');
var ConfirmBattleContainer = require('../containers/ConfirmBattleContainer');

var routes = (
  // no matter the path, make sure Main component is active (think of Twitter - header is always active, rest of page changes per url)
  // Main needs to be in charge of rendering child routes/components found inside of it, that become active
  // this.props.children of Main would be Home
  // want home to be active when none of the other routes (not counting main) are active... -> so it's the indexroute
  // /:playerOne --> routeParams === playerOne
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute  component={Home} />
      <Route path='playerOne' header="Player One" component={PromptContainer}/>
      <Route path="playerTwo/:playerOne" header="Player Two" component={PromptContainer} />
      <Route path="battle" component={ConfirmBattleContainer} />
    </Route>
  </Router>
);

// export from file
module.exports = routes;