var elixir = require('laravel-elixir');
//var browserify = require('browserify');
//global.jQuery = require('jquery');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

var path = {
    sass:{
        app:'app.scss',
        animations: 'animations.scss',
        colors: 'colors.scss',
        font: 'font.scss',
        mixins: 'mixins.scss',
        responsive: 'responsive.scss'
    },
    js:{
        jquery:'jquery.min.js',
        underscore: 'underscore.min.js',
        backbone: 'backbone.min.js',
        app:'app.js'
    },
    coffee:{
        app: 'app.coffee'
    }
}

elixir(function(mix) {
    mix.sass([
        path.sass.app,
        path.sass.animations,
        path.sass.colors,
        path.sass.font,
        path.sass.mixins,
        path.sass.responsive
    ]);
});

elixir(function(mix) {
    mix.coffee(path.coffee.app);
});

elixir(function(mix) {
    mix.scripts([
        path.js.jquery,
        path.js.underscore,
        path.js.backbone,
        path.js.app
    ]);
});