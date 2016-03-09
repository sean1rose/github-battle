var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id" + id + "&client_secret=" + sec;

function getUserInfo(username){
  // returns a promise
  return axios.get('https://api.github.com/users/' + username + param);
}

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
      console.log('info - ', info);
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
  }
};

module.exports = helpers;