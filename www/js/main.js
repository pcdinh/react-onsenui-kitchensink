import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ons from 'onsenui';

import {
  Page,
  Tabbar,
  Tab,
  Navigator
} from 'react-onsenui';


import Home from './components/Home';
import Dialogs from './components/Dialogs';
import Forms from './components/Forms';
import Animations from './components/Animations';

class Tabs extends Component {

  constructor(props) {
    super(props);
  }

  renderTabs() {
    return [
      {
        content: <Home navigator={this.props.navigator} />,
        tab: <Tab label="Home" icon="ion-ios-home-outline" />
      },
      {
        content: <Dialogs navigator={this.props.navigator} />,
        tab: <Tab label="Dialogs" icon="ion-ios-albums-outline" />
      },
      {
        content: <Forms />,
        tab: <Tab label="Forms" icon="ion-edit" />
      },
      {
        content: <Animations navigator={this.props.navigator} />,
        tab: <Tab label="Animations" icon="ion-film-marker" />
      }
    ];
  }

  render() {
    return (
      <Page>
        <Tabbar
          renderTabs={this.renderTabs.bind(this)}
        />
      </Page>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  renderPage(route, navigator) {
    route.props = route.props || {};
    route.props.navigator = navigator;

    return React.createElement(route.comp, route.props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{comp: Tabs}}
        renderPage={this.renderPage.bind(this)}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
