var posts = require('../dummyData/posts.json');

module.exports = function (context, payload, callback) { 
    context.dispatch('POSTS_RECEIVED', {  
        posts: posts  
    });
    callback();  
};  