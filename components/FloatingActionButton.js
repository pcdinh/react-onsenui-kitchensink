import React from 'react';

import {
  Page,
  Toolbar,
  BackButton,
  Fab,
  Icon
} from 'react-onsenui';

class FloatingActionButton extends React.Component {
  render() {
    return (
      <Page>
        <Toolbar>
          <div className="left"><BackButton>Back</BackButton></div>
          <div className="center">Floating action button</div>
        </Toolbar>

        <Fab position="right bottom" ripple>
          <Icon icon="md-phone" />
        </Fab>
      </Page>
    );
  }
}

module.exports = FloatingActionButton;
