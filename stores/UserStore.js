var createStore = require('fluxible-app/utils/createStore');  

var UserStore = createStore({  
    storeName: "UserStore",  
    handlers: {  
        "USER_LOGGED_IN": "handleUserReceived"  
    },  
    initialize: function(dispatcher) {  
        this.username = null;  
    },  
    handleUserReceived: function(payload) {  
        this.username = payload.username;  
        this.emitChange();  
    },  
    getUsername: function() {  
        return this.username;  
    },  
    dehydrate: function() {  
        return {  
            username: this.username  
        };  
    },  
    rehydrate: function(state) {  
        this.username = state.username;  
    }  
});  
module.exports = UserStore;