var elixir = require('laravel-elixir');
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
        app:'app.js',
        coffeeCompiled: './public/js/coffee.js'
    },
    coffee:{
        app: 'coffee.coffee'
    }
}

elixir(function(mix) {
    mix.sass([
        path.sass.app,
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
        path.js.app,
        path.js.coffeeCompiled
    ]);
});