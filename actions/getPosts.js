module.exports = function (context, payload, callback) {
    context.service.read('posts', {}, {}, function(err, posts) {
        if (err) {
            callback(err);
        } else {
            context.dispatch('POSTS_RECEIVED', {  
                posts: posts  
            });
            callback();  
        }
    });
};