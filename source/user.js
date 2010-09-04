SoundCloud.User = new JS.Class({
  initialize: function(username) {
    this._username = username;
  },
  
  tracks: function(callback, scope) {
    SoundCloud.request('users/' + this._username + '/tracks', {}, callback, scope);
  }
});

