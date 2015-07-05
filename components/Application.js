/*globals document*/

var React = require('react');
var Nav = require('./Nav');
var Home = require('./Home');
var About = require('./About');
var ApplicationStore = require('../stores/ApplicationStore');
var provideContext = require('fluxible/addons/provideContext');
var connectToStores = require('fluxible/addons/connectToStores');
var handleHistory = require('fluxible-router').handleHistory;

var Application = React.createClass({
    render: function() {
        var Handler = this.props.currentRoute.get('handler');

        return (
            <div>
                <Nav selected={this.props.currentPageName} links={this.props.pages} />
                <Handler />
            </div>
        );
    },

    componentDidUpdate: function(prevProps, prevState) {
        const newProps = this.props;
        if (newProps.pageTitle === prevProps.pageTitle) {
            return;
        }
        document.title = newProps.pageTitle;
    }
});

module.exports = handleHistory(provideContext(connectToStores(
    Application,
    [ApplicationStore],
    function (stores, props) {
        var appStore = stores.ApplicationStore;
        return {
            currentPageName: appStore.getCurrentPageName(),
            pageTitle: appStore.getPageTitle(),
            pages: appStore.getPages()
        };
    }
)));
