var Fluxible = require('fluxible');  
var Application = require('./components/Application');  

var ApplicationStore = require('./stores/ApplicationStore');  
var RouteStore = require('./stores/RouteStore');  
var UserStore = require('./stores/UserStore');
var FeedStore = require('./stores/FeedStore');

var fetchr = require('fluxible-plugin-fetchr');
var fetchrInstance = fetchr({
    xhrPath: '/api'
});

// create new fluxible instance  
var app = new Fluxible({  
    component: Application  
});

app.plug(fetchrInstance);

// register stores  
app.registerStore(RouteStore);  
app.registerStore(ApplicationStore);  
app.registerStore(UserStore);
app.registerStore(FeedStore);

module.exports = app;  