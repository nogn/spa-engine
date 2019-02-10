const DEFAULT_ROUTE = 'home';

class Router {
    constructor(routes, el) {
        this.routes = routes;
        this.el = el;

        window.onhashchange = this.onHashChanged.bind(this);
        this.onHashChanged();
    }

    async onHashChanged(ev) {
        let nextRoute = this.routes[DEFAULT_ROUTE];

        if (this.isCurrentHashValid()) {
            const routeName = this.getCurrentRouteName();

            if (this.isRouteValid(routeName))
                nextRoute = this.routes[routeName];
        }

        this.loadAndShowRoute(nextRoute);
    }

    isCurrentHashValid() {
        return window.location.hash.length > 0;
    }
    
    getCurrentRouteName() {
        return window.location.hash.substr(1);
    }
    
    isRouteValid(routeName) {
        return this.routes[routeName] != null;
    }

    async loadAndShowRoute(route) {
        await route.loadContent();
        this.el.innerHTML = '';
        route.showContent(this.el);
    }
 }  