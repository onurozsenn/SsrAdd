 //<!-- STEP 3 - Configure and Initialize the player-->
 var playerConfig = {
   "key": "af5a068b-cbc3-4e6e-9bf9-da42fde0a873",
   "playback": {
     "muted": true,
     "autoplay": false
   }
 }
 var container = document.getElementById('my-player');
 var player = new bitmovin.player.Player(container, playerConfig);

 //<!-- STEP 4 - Configure and load a Source for the player -->
 var sourceConfig = {
   "title": "SsrAdd",
   "description": "TRT Belgesel Test Yayını",
   "hls": "https://d2xwn494f2lep.cloudfront.net/v1/master/80dbfc318ab6b980679b32095ba497236de6d2f9/TRT-Belgesel/master.m3u8",
   "smooth": "https://test.playready.microsoft.com/smoothstreaming/SSWSS720H264/SuperSpeedway_720.ism/manifest",
   "poster": "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg"
 }

 player.load(sourceConfig).then(function() {
   console.log('Successfully loaded Source Config!');
 }).catch(function(reason) {
   console.log('Error while loading source:', reason);
 });
