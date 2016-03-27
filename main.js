const React = require('react');
const ReactDOM = require('react-dom');

const ons = require('onsenui');
const Ons = require('react-onsenui');

const Dialogs = require('./components/dialogs');
const Forms = require('./components/forms');

var App = React.createClass({
  renderTabs: function() {
    return [
      {
        content: <Dialogs />,
        tab: <Ons.Tab label="Dialogs" />
      },
      {
        content: <Forms />,
        tab: <Ons.Tab label="Forms" />
      }
    ];
  },

  render: function() {
    return (
      <Ons.Tabbar
        renderTabs={this.renderTabs}
      />
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
