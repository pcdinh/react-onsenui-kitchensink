import React from 'react';
import ReactDOM from 'react-dom';

import ons from 'onsenui';
import Ons from 'react-onsenui';

import Home from './components/Home';
import Dialogs from './components/Dialogs';
import Forms from './components/Forms';
import Animations from './components/Animations';

var Tabs = React.createClass({
  renderTabs: function() {
    return [
      {
        content: <Home navigator={this.props.navigator} />,
        tab: ons.platform.isAndroid() ? <Ons.Tab label="Home" /> : <Ons.Tab label="Home" icon="ion-ios-home-outline" />
      },
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
  renderPage: function(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;

    return React.createElement(route.comp, route.props);
  },

  render: function() {
    return (
      <Ons.Navigator
        initialRoute={{comp: Tabs}}
        renderPage={this.renderPage}
      />
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
