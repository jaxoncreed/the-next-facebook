var createStore = require('fluxible-app/utils/createStore');
var routesConfig = require('../configs/routes');
var RouteStore = require('./RouteStore');

var ApplicationStore = createStore({
    storeName: "ApplicationStore",
    handlers: {
        'NAVIGATE_SUCCESS': 'handleRouteUpdate'
    },
    initialize: function (dispatcher) {
        this.pages = routesConfig;
        this.pageTitle = '';
    },
    handleRouteUpdate: function(currentRoute) {
        var self = this;
        this.dispatcher.waitFor(RouteStore, function () {
            if (currentRoute && currentRoute.get('title')) {
                self.pageTitle = currentRoute.get('title');
                self.emitChange();
            }
        });
    },
    getCurrentPageName: function() {
        return this.currentPageName;
    },
    getPageTitle: function() {
        return this.pageTitle;
    },
    getPages: function() {
        return this.pages;
    },
    dehydrate: function() {
        return {
            currentPageName: this.currentPageName,
            currentPage: this.currentPage,
            pages: this.pages,
            pageTitle: this.pageTitle,
        };
    },
    rehydrate: function(state) {
        this.currentPageName = state.currentPageName;
        this.currentPage = state.currentPage;
        this.pages = state.pages;
        this.pageTitle = state.pageTitle;
    }
});

module.exports = ApplicationStore;
