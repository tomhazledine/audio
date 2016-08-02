---
layout: default
subtitle: Style-Free Audio Player
title: SFAP.js

callsToAction:
- url: \#install
  text: Install v1.0.0
- url: https://github.com/tomhazledine/stylefreeaudio
  text: View Source

audioLinks:
- trackName: Hands
  bandName: Four Tet
  albumName: Rounds
  url: http://audio.eatenbymonsters.com/reviews/fourTet/hands.mp3
- trackName: The Woodpile
  bandName: Frightened Rabbit
  albumName: Pedestrian Verse
  url: http://audio.eatenbymonsters.com/reviews/frightenedRabbit/theWoodpile.mp3
- trackName: Lost That Easy
  bandName: Cold War Kids
  albumName: Dear Miss Lonelyhearts
  url: http://audio.eatenbymonsters.com/reviews/coldWarKids/lostThatEasy.mp3
---

Styling default HTML `<audio>` elements is a pain. We *should* be able to do it with CSS, but sadly at the moment we have to battle the "shadow DOM" to get anywhere. Thankfully we can use the Web Audio API to recreate our own audio player. One we can style with CSS. One where *we* have control of the markup.

{% include audioPlayer.html %}

<div id="over"></div>

The **Style-Free Audio Player (SFAP)** is a handy tool to help control how our audio is displayed. Store details of the audio you want to include in JSON (currently all you need is the path to the file). Then pass it through the `StyleFreeAudio()` function in your javascript along with a reference to your markup. SFAP then links your markup to the audio functionality.

### Turn this:

    <audio src="path.to/audio/file.mp3"></audio>

The basic `html5` audio element.

### Into this:

    <div class="customAudioPlayer" data-song-index="0">
      <div class="loader"></div>
      <button class="playerTrigger"><span class="buttonText">play</span></button>
      <div class="metaWrapper">
        <span class="titleDisplay">Song Title</span>
        <span class="artistDisplay">Artist Name</span>
      </div>
      <div class="timingsWrapper">
        <span class="songPlayTimer">0:00</span>
        <div class="songProgressSliderWrapper">
          <div class="pseudoProgressBackground"></div>
          <div class="pseudoProgressIndicator"></div>
          <div class="pseudoProgressPlayhead"></div>
          <input type="range" min="0" max="100" class="songProgressSlider">
        </div>
        <span class="songDuration">3:51</span>
      </div>
      <div class="songVolume">
        <button class="songMuteButton">Mute</button>
        <div class="songVolumeLabelWrapper">
          <span class="songVolumeLabel">Volume</span>
          <span class="songVolumeValue">10</span>
        </div>
        <div class="songVolumeSliderWrapper">
          <div class="pseudoVolumeBackground"></div>
          <div class="pseudoVolumeIndicator"></div>
          <div class="pseudoVolumePlayhead"></div>
          <input type="range" min="0" max="1" step="0.1" class="songVolumeSlider">
        </div>
      </div>
    </div>

Each individual element of the audio player is a vanilla DOM element that can be styled however you like using `css`.

### SFAP gives you:

* A play/pause `<button>`.
* A `songPlayTimer` element that displays the current playhead position of the audio file in minutes and seconds (MM:SS).
* A `songDuration` element that displays the total length of the audio file in minutes and seconds (MM:SS).
* A HTML `<range>` input field that shows a visual representation of the audio file's play progress, and can manually change the play position of the audio file.

<div class="divider" id="install"></div>

## 2. Installation

To install SFAP, just include the `styleFreeAudio.min.js` file at the bottom of your HTML before your custom javascript.

    <script src="/path/to/styleFreeAudio.min.js"></script>
    <script src="/path/to/yourCustom.js"></script>

{:.callsToAction}
<a href="{{ site.url }}/downloads/styleFreeAudio.min.js" class="callToAction">Download the JS</a>

Then add the [initialization code](#init) to your custom JS file, and add the [required markup](#markup) to your page.

<div class="divider" id="init"></div>

## 3. Initialization

To initialize SFAP you need two things: Audio data, and a wrapper element for your player markup. Pass these into the SFAP javascript function and you're good to go.

    // Get the element that wraps all your player's markup.
    var playerWrapper = document.getElementById('audioPlayerIdGoesHere');
    // Get the audio files' data.
    var audioData = audioDataGoesHere;
    // Pass them both into SFAP. 
    var myAudioPlayer = StyleFreeAudio(audioData,playerWrapper);

### Audio Data

This comes in the form of a simple JSON object that stores the URL for each audio file you want to be able to play on the page.

    {
        "url": "path/to/audio/file/one.mp3"
    },
    {
        "url": "path/to/audio/file/two.mp3"
    }

The simplest way to save this JSON data for **SFAP** to read is as a JS variable, either within your own javascript file or inline in the page html itself.

    <script>
        var audioExamples = [
            {
                "url": "path/to/audio/file/one.mp3"
            },
            {
                "url": "path/to/audio/file/two.mp3"
            }
        ];
    </script>

<div class="divider" id="markup"></div>

## 4. Required Markup

To give your audio player controls ("Play", "Pause") and song-data displays ("Song Length", "Time Played"), you need to add some classes to your markup.

### The play/pause button.

The play/pause button needs three classes and a custom data attribute for it to work properly.

    <button class="playlistSongTrigger songPaused notPlayedYet" data-song-index="0">Play/Pause</button>

1. The `playlistSongTrigger` class links the element to SFAP.

2. The `songPaused` class indicates that the song is not currently playing. This will be changed to `songPlaying` when the associated audio file is being played.

3. The `notPlayedYet` class is used to tell SFAP to get the duration information the first time the song is played (until the browser tried to load the audio file, we can't measure how long the file is).

4. The `song-index` data attribute assigns the target audio file.

### The play timer element.

This displays the current playhead position of the audio file in minutes and seconds (MM:SS).

This can be any element with the class `songPlayTimer`. When the current playhead changes, the inner HTML of the element is updated to the current position in MM:SS format.

    <span class="songPlayTimer">0:00</span>


### The audio duration element.

This displays the total length of the audio file in minutes and seconds (MM:SS).

    <span class="songDuration">0:00</span>

### The current play position slider.

This is a HTML `range` input field that shows a visual representation of the audio file's play progress, and can manually change the play position of the audio file.

    <input type="range" class="songProgressSlider" min="0" max="100" value="0" oninput="myAudioPlayer.sliderScrub(this.value, 1)">

To work, this `range` element must trigger the `sliderScrub()` function on input change, and must pass the value of the input (`this.value`) and the target audio file's index number.

The position information is calculated as a percentage of the audio file's play-time, so set the input's `min` and `max` values to `0` and `100` respectively.

<div class="divider" id="contrib"></div>

## Contribute

This started out as a "scratch your own itch" tool for a specific project. I'm open-sourcing it in the hope it might prove useful to others too. There are *a few* audio player tools/plugins out there, but most have too many features for my needs. I like simplicity, and I like any JS I add to my sites to be as lean as possible.

I'm hoping SFAP can be of use to as many people as possible. If you have an improvement or bug-fix or new feature, get in touch! Make a pull request on the [SFAP Github repo](https://github.com/tomhazledine/stylefreeaudio). I'm just getting started with "open source", so I'd be very glad of any help or suggestions or advice.

{% include audioData.html %}
