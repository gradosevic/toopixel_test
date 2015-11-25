## iBread App - TooPixel Test

This app was created for job application purpose @ TooPixel exclusively.

## Overview

PHP Framework Laravel was used for structuring and organizing project files. No database was used in this demo, all data is loaded directly from views.

## Technologies

Laravel PHP Framework, Gulp, CSS, JavaScript, jQuery, Sass, CoffeeScript, Elixir, Backbone.js

## Installation

* Clone repository to your server
* Run composer: **php composer.phar install**
* Create *.env* from *.env.example* if not already created
* Generate app key: **php artisan key:generate**, if needed

## Genereting front-end assets
* To generate assets, simply run: **gulp**
* To make Gulp watching for changes, run: **gulp watch**
* To generate only CSS files, run: **gulp sass**
* To generate only JS files, run: **gulp scripts**
* To minify and uglify assets, run gulp with **--production** flag: **gulp --production**
