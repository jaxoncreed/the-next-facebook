module.exports = {
    login: {
        path: '/',
        method: 'get',
        page: 'login',
        title: 'Log In',
        handler: require('../components/Login')
    },
    feed: {  
        path: '/feed',  
        method: 'get',  
        page: 'feed',  
        title: 'Your Feed',  
        handler: require('../components/Feed'),
        action: require('../actions/getPosts')
    }  
};
