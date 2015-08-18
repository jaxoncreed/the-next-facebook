var React = require('react');  
var NavLink = require('fluxible-router').NavLink; 

var NavBar = React.createClass({  
    render() {  
        return (  
            <p>  
                <NavLink href="/">Home</NavLink>  
                <span> - </span>  
                <NavLink href="/feed">Your Feed</NavLink>   
            </p>  
        );  
    }  
});  
module.exports = NavBar;  