SoundCloud.JSONP = {
  request: function(url, callback, scope) {
    var head   = document.getElementsByTagName('head')[0],
        script = document.createElement('script'),
        name   = this.getCallbackName();
    
    var handler = function(response) {
      window[name] = undefined;
      try { delete window[name] } catch (e) {}
      callback.call(scope, response);
    };
    
    window[name] = handler;
    
    script.type = 'text/javascript';
    script.src  = url + '&callback=' + name;
    head.appendChild(script);
    
    if (window.console) console.info('GET ' + url);
  },
  
  getCallbackName: function() {
    this.__n__ += 1;
    return '__jsonpcallback' + this.__n__ + '__';
  },
  
  __n__: 0
};

