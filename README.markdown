= SoundCloud - in JavaScript!

Some object wrappers for the SoundCloud API to be used in the
browser. Requires [JS.Class][1]

[1]: http://jsclass.jcoglan.com


== Build it

    gem install jake
    git clone git://github.com/jcoglan/soundcloud.js
    cd soundcloud.js
    jake


== Examples

    SoundCloud.KEY = 'YOUR_KEY_HERE';
    
    // Search for tracks with text
    SoundCloud.tracks({q: 'Electrixx'}, function(tracks) { ... });
    
    // Search for tracks by tag
    SoundCloud.tracks({tag: ['foo','bar']}, function(tracks) { ... });
    
    // Get a user's tracks
    SoundCloud.user('microdizko').tracks(function(tracks) { ... });

