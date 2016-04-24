import React from 'react';
import ons from 'onsenui';

import {
  Page,
  Toolbar,
  BackButton,
  LazyList
} from 'react-onsenui';

class InfiniteScroll extends React.Component {
  renderRow(index) {
    return (
      <div>{'Item ' + index}</div>
    );
  }

  render() {
    return (
      <Page>
        <Toolbar>
          <div className="left">
            <BackButton>Back</BackButton>
          </div>
          <div className="center">
            Infinite scroll
          </div>
        </Toolbar>

        <LazyList
          length={10000}
          renderRow={this.renderRow}
          calculateItemHeight={() => ons.platform.isAndroid() ? 55 : 44}
        />
      </Page>
    );
  }
}

module.exports = InfiniteScroll;
