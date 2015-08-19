var posts = require('../dummyData/posts.json');

module.exports = {
    name: "posts",
    read: function(req, resource, params, config, callback) {
        // We would do some kind of database call here.
        callback(null, posts);
    }
}