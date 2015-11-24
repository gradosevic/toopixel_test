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
        app:'app.scss'
    },
    js:{
        app:'app.js',
        backbone: 'backbone.min.js'
    }
}

elixir(function(mix) {
    mix.sass(path.sass.app);
});

elixir(function(mix) {
    mix.coffee();
});

elixir(function(mix) {
    mix.scripts([
        path.js.backbone,
        path.js.app
    ]);
});