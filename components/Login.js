var React = require('react');  

var Login = React.createClass({  
    render() {  
        return (  
            <div>  
                <h2>Log In</h2>  
                <form>  
                    <label for="username">Username:</label>  
                    <input type="text" />  
                    <input id="username" type="submit" value="Log In" />  
                </form>  
            </div>  
        );  
    }  
});  
module.exports = Login;