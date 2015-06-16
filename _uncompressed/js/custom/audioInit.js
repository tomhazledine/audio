// Get the element that wraps all your player's markup.
var playerWrapper = document.getElementById('audioExamples');
// Get the audio files' data.
var audioData = songs;
// Pass them both into SFAP. 
var myAudioPlayer = StyleFreeAudio(audioData,playerWrapper);

