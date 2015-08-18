var Fluxible = require('fluxible');  
var Application = require('./components/Application');  

var ApplicationStore = require('./stores/ApplicationStore');  
var RouteStore = require('./stores/RouteStore');  
var UserStore = require('./stores/UserStore');

// create new fluxible instance  
var app = new Fluxible({  
    component: Application  
});

// register stores  
app.registerStore(RouteStore);  
app.registerStore(ApplicationStore);  
app.registerStore(UserStore); 

module.exports = app;  