var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

ReactDOM.render(
  routes,
  document.getElementById('app')
);

/*
FIRST...
Focused
Independent
Reusable
Small
Testable
*/

/*
var USER_DATA = {
  name: 'Sean Rose',
  username: 'sean1rose',
  image: 'https://avatars3.githubusercontent.com/u/5770762?v=3&s=460'
};

// component 1
var ProfilePic = React.createClass({
  render: function(){
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var Link = React.createClass({
  changeURL: function(){
    // built in dom method
    window.location.replace(this.props.href)
  },
  render: function(){
    return (
      // {this.props.children} is whatever is b/w opening and closing of component {this.props.username}
      <span 
      style={{color: 'blue', cursor: 'pointer'}}
      onClick={this.changeURL}>
      {this.props.children}
      </span>
    )
  }
})


// component 2
var ProfileLink = React.createClass({
  render: function(){
    return (
      // <Link> is a custom component
      // pass in properties via attributes
      <div>
        <Link href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

// component 3
var ProfileName = React.createClass({
  render: function(){
    return (
      <div>{this.props.name}</div>
    )
  }
});

// container component
var Avatar = React.createClass({
  render: function(){
    return (
      // ProfilePic component takes imageUrl (this.props.imageUrl)
      // ProifleName takes name
      // ProfileLink takes usrename
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
*/




// // fn(d) = v
// // function, takes in some data --> returns a view
// // this is how u define a function/component
// var HelloWorld = React.createClass({
//   // render is a pure function
//   render: function(){
//     return (
//       <div> Hello, {this.props.name} you're {this.props.anySortOfData} old </div>
//     )
//   }
// });

// // this is how u use the component
// ReactDOM.render(
//   // way to access component properties is thru the use of "this.props" in the original component definition
//   // this example is equivalent to invoking a function (in this case HelloWorld function) where you pass in a name argument and an anySortOfData argument
//   // so can access name property via {this.props.name}
//   <HelloWorld name="Sean" anySortOfData={32} />,
//   document.getElementById('app')
// );

