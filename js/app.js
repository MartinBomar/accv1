(function () {
    function init() {
        var router = new Router([
            new Route('map', true),
            new Route('input'),
            new Route('cal')
        ]);
    }
    init();
}());