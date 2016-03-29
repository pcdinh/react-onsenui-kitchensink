const React = require('react');
const Ons = require('react-onsenui');

class FloatingActionButton extends React.Component {
  render() {
    return (
      <Ons.Page>
        <Ons.Toolbar>
          <div className="left"><Ons.BackButton>Back</Ons.BackButton></div>
          <div className="center">Floating action button</div>
        </Ons.Toolbar>

        <Ons.Fab position="right bottom" ripple>
          <Ons.Icon icon="md-phone" />
        </Ons.Fab>
      </Ons.Page>
    );
  }
}

module.exports = FloatingActionButton;
