var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id" + id + "&client_secret=" + sec;

function getUserInfo(username){
  // returns a promise
  return axios.get('https://api.github.com/users/' + username + param);
}

var getRepos = function(username){
  // use github api to  fetch username's repos
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
};

var getTotalStars = function(repos){
  // calc all the stars a user has
  // loop over the data prop on these repos, use reduce
  return repos.data.reduce(function(prev, cur){
    return prev + cur.stargazers_count
  }, 0);
};

var getPlayersData = function(player){
  // fetch git repos 
  // getTotalStars
  //return obj w/ that data
  return getRepos(player.login)
    .then(getTotalStars)
      .then(function(totalStars){
        return {
          followers: player.followers,
          totalStars: totalStars
        }
      })
};

var calculateScores = function(players){
  // return an array after doing fancy algos to determine a winner
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
};

var helpers = {
  getPlayersInfo: function(players){
    // fetch some data from github using axio (npm install --save axios)
    // want to loop over passed in players array, for each item/username (use .map), call getUserInfo, then return that data to whoever invoked getPlayersInfo from component did mount
    
    // passing axios.all an array of promises
    // .all -> when all promises resolve -> .then runs
    return axios.all(players.map(function(username){
      // returning an array of promises
      return getUserInfo(username);
    })).then(function(info){
      // console.log('info - ', info);
      // want to modify data a little bit (don't want headers and config, etc.)
      return info.map(function(user){
        // only want the data property
        return user.data;
        // *** BECAUSE WE KEEP RETURNING -> WILL JUST KEEP RETURING ANOTHER PROMISE, so getPlayersInfo ends up calling another promise when it's called --> use '.then' after calling .getPlayersInfo...***
      })
      // good practice to run .catch at end of promise chain
    }).catch(function(err){
      console.warn('error in getPlayersInfo', err);
    })
  },
  battle: function(players){
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function(err){ console.warn('err in getPlayersInfo - ', err)})
  }
};

module.exports = helpers;