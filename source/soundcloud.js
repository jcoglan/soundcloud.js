SoundCloud = {
  request: function(resource, params, callback, scope) {
    params.consumer_key = SoundCloud.KEY;
    var qs = '', key, value;
    for (key in params) {
      if (qs) qs += '&';
      value = params[key];
      if (Array === value) value = value.join(',');
      qs += encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }
    var url = 'http://api.soundcloud.com/' + resource + '.js?' + qs;
    SoundCloud.JSONP.request(url, callback, scope);
  },
  
  tracks: function(params, callback, scope) {
    this.request('tracks', params, callback, scope);
  },
  
  user: function(username) {
    return new SoundCloud.User(username);
  }
};

