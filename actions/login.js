module.exports = function (context, payload, callback) {  
    console.log("Inside the Log In Action!");  
    console.log("Username: " + payload.username);  
    context.dispatch('USER_LOGGED_IN', {  
        username: payload.username  
    });  
    callback();  
};