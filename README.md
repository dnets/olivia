# Olivia
## Description

A HTML5 implementation of Shahin Srowar's Olivia design. Original design had no specification for mobile/tablet, so improvised design decisions were made, such as putting contacts in sliders and using alternative slider for screenshots for Bootstrap's xs and sm breakpoints (<991px).

## Screenshots
Fullsize version | Mobile version
---------------- | --------------
[![Fullsize version](https://raw.githubusercontent.com/dnets/olivia/master/img/olivia-screenshot-thumb.jpg)][ss1] | [![Mobile version](https://raw.githubusercontent.com/dnets/olivia/master/img/olivia-screenshot-mobile-thumb.jpg)][ss2]

[ss1]: https://raw.githubusercontent.com/dnets/olivia/master/img/olivia-screenshot.jpg
[ss2]: https://raw.githubusercontent.com/dnets/olivia/master/img/olivia-screenshot-mobile.jpg

## What's used?

- html5 boilerplate
- jQuery
- gulp
- gulp-sass
- browser-sync
- wiredep injection
- Twitter Bootstrap
- FontAwesome
- lightslider.js
- npm
- bower

## How to serve?

There are number of dependencies that are required to set up the development environment, install them using

```
npm install
bower install
```

To hookup browser-reload and start serving on localhost just type:

```
gulp
```
