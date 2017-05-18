var player = require('play-sound')(opts = {})

// $ mplayer foo.mp3 
player.play('/Users/dimascio/Downloads/tjbot117413-95186-1fk4fvw.97z4ghw7b9.wav', function(err){
  if (err) throw err
})

// { timeout: 300 } will be passed to child process
player.play('/Users/dimascio/Downloads/tjbot117413-95186-1fk4fvw.97z4ghw7b9.wav', { timeout: 300 }, function(err){
  if (err) throw err
})

// configure arguments for executable if any
player.play('/Users/dimascio/Downloads/tjbot117413-95186-1fk4fvw.97z4ghw7b9.wav', { afplay: ['-v', 1 ] /* lower volume for afplay on OSX */ }, function(err){
  if (err) throw err
})

// access the node child_process in case you need to kill it on demand
var audio = player.play('/Users/dimascio/Downloads/tjbot117413-95186-1fk4fvw.97z4ghw7b9.wav', function(err){
  if (err && !err.killed) throw err
})
audio.kill()

// var Sound = require('aplay');

// // fire and forget:
// // var sound  = '/var/folders/qb/71mvt5097_x4zxkvlmlz9_d40000gn/T/tjbot117410-4393-1rqhpyz.o0xsazia4i';
// var sound = '/var/folders/qb/71mvt5097_x4zxkvlmlz9_d40000gn/T/tjbot117410-4393-mzmqfx.djs5szia4i.wav';
// // var sound = '/Users/dimascio/Downloads/WAV_PIE_HORN.wav'

// new Sound().play(sound);

// // with ability to pause/resume:
// var music = new Sound();
// music.play(sound);


// setTimeout(function () {
// 	music.pause(); // pause the music after five seconds
// }, 5000);

// setTimeout(function () {
//   music.resume(); // and resume it two seconds after pausing
// }, 7000);

// // you can also listen for various callbacks:
// music.on('complete', function () {
//   console.log('Done with playback!');
// });