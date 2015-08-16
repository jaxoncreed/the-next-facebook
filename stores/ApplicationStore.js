var createStore = require('fluxible-app/utils/createStore');
var routesConfig = require('../configs/routes');
var RouteStore = require('./RouteStore');

var ApplicationStore = createStore({
    storeName: 'ApplicationStore',
    handlers: {
        'NAVIGATE_SUCCESS': 'handlePageTitle'
    },
    initialize: function (dispatcher) {
        this.currentPageName = null;
        this.currentPage = null;
        this.pages = routesConfig;
        this.pageTitle = '';
    },
    handlePageTitle: function(currentRoute) {
        this.dispatcher.waitFor(RouteStore, function() {
            if (currentRoute && currentRoute.get('title')) {
                this.pageTitle = currentRoute.get('title');
                this.emitChange();
            }
        }.bind(this));
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
            pageTitle: this.pageTitle
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
