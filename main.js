const React = require('react');
const ReactDOM = require('react-dom');

const ons = require('onsenui');
const Ons = require('react-onsenui');

const Dialogs = require('./components/dialogs');
const Forms = require('./components/forms');
const Animations = require('./components/animations');

window.ons = ons;

var Tabs = React.createClass({
  renderTabs: function() {
    return [
      {
        content: <Dialogs navigator={this.props.navigator} />,
        tab: ons.platform.isAndroid() ? <Ons.Tab label="Dialogs" /> : <Ons.Tab label="Dialogs" icon="ion-ios-albums-outline" />
      },
      {
        content: <Forms />,
        tab: ons.platform.isAndroid() ? <Ons.Tab label="Forms" /> : <Ons.Tab label="Forms" icon="ion-edit" />
      },
      {
        content: <Animations navigator={this.props.navigator} />,
        tab: ons.platform.isAndroid() ? <Ons.Tab label="Animations" /> : <Ons.Tab label="Animations" icon="ion-film-marker" />
      }
    ];
  },

  render: function() {
    return (
      <Ons.Page>
        <Ons.Tabbar
          renderTabs={this.renderTabs}
        />
      </Ons.Page>
    );
  }
});

var App = React.createClass({
  renderScene: function(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;

    return React.createElement(route.comp, route.props);
  },

  render: function() {
    return (
      <Ons.Navigator
        initialRoute={{comp: Tabs}}
        renderScene={this.renderScene}
      />
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
