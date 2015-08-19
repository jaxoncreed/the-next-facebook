var createStore = require('fluxible-app/utils/createStore');  

var FeedStore = createStore({  
    storeName: "FeedStore",  
    handlers: {  
        "POSTS_RECEIVED": "handlePostsReceived"  
    },  
    initialize: function(dispatcher) {  
        this.posts = [];  
    },  
    handlePostsReceived: function(payload) { 
        this.posts = payload.posts;  
        this.emitChange();
    },  
    getPosts: function() {  
        return this.posts;  
    },  
    dehydrate: function() {  
        return {  
            posts: this.posts  
        };  
    },  
    rehydrate: function(state) {  
        this.posts = state.posts;  
    }  
});  
module.exports = FeedStore;