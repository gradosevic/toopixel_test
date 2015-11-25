(function($){
    var AppRouter = Backbone.Router.extend({
        routes: {
            "*actions": "defaultRoute"
        }
    });

    var app_router = new AppRouter;

    app_router.on('route:defaultRoute', function(actions) {
        console.log(actions);
    });

    Backbone.history.start();
})(jQuery);