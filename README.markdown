= SoundCloud - in JavaScript!

Some object wrappers for the SoundCloud API to be used in the
browser. Requires [JS.Class][1]

[1]: http://jsclass.jcoglan.com


== Examples

    SoundCloud.KEY = 'YOUR_KEY_HERE';
    
    // Search for tracks with text
    SoundCloud.tracks({q: 'Electrixx'}, function(tracks) { ... });
    
    // Search for tracks by tag
    SoundCloud.tracks({tag: ['foo','bar']}, function(tracks) { ... });
    
    // Get a user's tracks
    SoundCloud.user('microdizko').tracks(function(tracks) { ... });

