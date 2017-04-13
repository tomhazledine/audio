---
layout: default
subtitle: A css-friendly audio player
title: Picobel.js
menu:
- title: Overview
  id: overview
- title: Install
  id: installation
- title: Use
  id: usage
- title: Themes
  id: themes
- title: Contribute
  id: contribute

callsToAction:
- url: \#installation
  text: Install v0.2.0
- url: https://github.com/tomhazledine/picobel
  text: View Source
---

<div id="overview"></div>

<audio src="//audio.eatenbymonsters.com/reviews/coldWarKids/lostThatEasy.mp3" title="Lost that easy" data-artist="Cold War Kids" controls>
    Your browser does not support the <code>audio</code> element.
</audio>

Picobel.js (pronounced *peek-o-bell*, as in *decibel*) is a lightweight dependency-free Javascript tool that converts html audio tags into styleable markup.

<div class="divider"></div>

## Why would I need this?

There are two reasons you might want to use Picobel...

1. You want a uniform cross-browser experience for the audio players on your site. Pick a pre-made Picobel theme, and you're all set.

2. You're frontender and CSS magician who loves to have control over every aspect the sites you create. You can use the markup-only version of Picobel, and write your own CSS.

The native html `<audio>` tag provides fantastic functionality, but gives you no styling options at all. Picobel rebuilds the audio player with regular html elements: you get all the functionality of the native audio element, *and* complete control of it's appearance.

Using Picobel you can turn this:

![Native audio player](assets/images/native_players.png)
*Default browser audio players*

Into this:

![Picobel-styled audio player](assets/images/picobel_players.png)
*Picobel-styled audio players*

**Picobel** allows you to create custom styles for your audio players: providing cross-browser consistency and a seamless integration with your existing brand styles.

<div class="divider" id="installation"></div>

## Installation

To use **Picobel.js** you'll need to include the `picobel.min.js` file in your project. This needs to be called before your custom scripts, and ideally in the `<foot>` of your page.

    <!-- Load Picobel -->
    <script type='text/javascript' src='picobel.min.js'></script>

You will also need the CSS styles. Choose which "theme" you'd like to use, and load that stylesheet.

    <!-- Load the Picobel CSS -->
    <link rel='stylesheet' href='basic.min.css' type='text/css'/>

Then initialize the function. For simplicity, the example below does this in an in-line `<script>` tag, but you can add this to your master JS file. Just make sure you initialise Picobel *after* the picobel.min.js file has been called.

    <!-- Initialise Picobel -->
    <script>
        Picobel();
    </script>

When your page loads, Picobel will replace any default `<audio>` elements with a block of custom-markup, complete with classes that you can use to apply your custom CSS.

<div class="divider" id="usage"></div>

## Usage

If you're using a theme other than "basic", you'll need to specify the theme name in the options object when you intialise Picobel.

    Picobel( { theme: 'themename' } );

This adds a class to the container of each audio element, so if you've made your own styles you can use this to make sure your CSS is nicely namespaced.

### This:

    <audio src="http://path/to/audio/file.mp3"></audio>

### Gets turned into this:

    <div class="customAudioPlayer player_0" data-song-index="0">
        <div class="loader"></div>
        <button class="playerTrigger">
            <span class="buttonText">play</span>
        </button>
        <div class="metaWrapper">
            <span class="titleDisplay">file.mp3</span>
            <span class="artistDisplay"></span>
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

## Setting "artist" and "track name" values

Applying metadata to your audio file requires adding data-attributes to your `<audio>` markup. Picobel gets the track name from the regular `title` attribute, and looks for artist information in the `data-artist` attribute. For the demo at the top of this page, the markup looks like this:

    <audio src="http://audio.eatenbymonsters.com/reviews/coldWarKids/lostThatEasy.mp3" title="Lost that easy" data-artist="Cold War Kids" controls>
        Your browser does not support the <code>audio</code> element.
    </audio>

<div class="divider" id="themes"></div>

## Pre-made themes

Picobel comes with many pre-made themes. To use a theme, make sure you've downloaded the correct stylesheet from the [Picobel CSS library](https://github.com/tomhazledine/picobel/tree/master/css) and then reference the chosen themename as an option when you initialize Picobel in your JS.

    <!-- Initialise Picobel with a theme-->
    <script>
        Picobel( { themename: "chosenThemeName" } );
    </script>

So if you wanted to use the "iTunes" theme, your Picobel call would look like this: `Picobel({themename:"itunes"});`. If you don't explicitly choose a theme, then the Default theme will be used. The current options are: `skeleton`, `itunes`, `bbc`, `soundcloud`, `pitchfork`, & `eatenbymonsters`.

You can see them all in action in the [Picobel.js CodePen Collection](http://codepen.io/collection/XpZEor/), and see screenshots of each featured theme on this page:

![Default theme](assets/images/theme_basic.png)
*Default theme. [View the this theme on CodePen](http://codepen.io/tomhazledine/pen/VpNqYO)*

![Skeleton theme](assets/images/theme_skeleton.png)
*Skeleton theme (use this as a jumping-off point for your own styles). [View the this theme on CodePen](http://codepen.io/tomhazledine/pen/zZXyGa)*

![BBC iPlayer theme](assets/images/theme_bbc.png)
*BBC iPlayer-esque theme. [View the this theme on CodePen](http://codepen.io/tomhazledine/pen/kXZaKL)*

![iTunes theme](assets/images/theme_itunes.png)
*iTunes-esque theme. [View the this theme on CodePen](http://codepen.io/tomhazledine/pen/NAyWQW)*

![Soundcloud theme](assets/images/theme_soundcloud.png)
*Soundcloud-esque theme. [View the this theme on CodePen](http://codepen.io/tomhazledine/pen/VpNqjJ)*

![Pitchfork theme](assets/images/theme_pitchfork.png)
*Pitchfork-esque theme. [View the this theme on CodePen](http://codepen.io/tomhazledine/pen/OpGrXN)*

![Eaten by Monsters theme](assets/images/theme_ebm.png)
*Eaten by Monsters theme. [View the this theme on CodePen](http://codepen.io/tomhazledine/pen/gmyZLP)*

<div class="divider" id="contribute"></div>

## Contribute

This started out as a "scratch your own itch" tool for a specific project. I'm open-sourcing it in the hope it might prove useful to others too. There are *a few* audio player tools/plugins out there, but most have too many features for my needs. I like simplicity, and I like any JS I add to my sites to be as lean as possible.

I'm hoping Picobel can be of use to as many people as possible. If you have an improvement or bug-fix or new feature, get in touch! Make a pull request on the [Picobel.js Github repo](https://github.com/tomhazledine/picobel). I'm just getting started with "open source", so I'd be very glad of any help or suggestions or advice.

* MIT license
* No dependencies
* v0.2.0
* Most recent release date: 20170208