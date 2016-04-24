import React from 'react';
import ons from 'onsenui';
import Ons from 'react-onsenui';

class InfiniteScroll extends React.Component {
  renderRow(index) {
    return (
      <div>{'Item ' + index}</div>
    );
  }

  render() {
    return (
      <Ons.Page>
        <Ons.Toolbar>
          <div className="left">
            <Ons.BackButton>Back</Ons.BackButton>
          </div>
          <div className="center">
            Infinite scroll
          </div>
        </Ons.Toolbar>

        <Ons.LazyList
          length={10000}
          renderRow={this.renderRow}
          calculateItemHeight={() => ons.platform.isAndroid() ? 55 : 44}
        />
      </Ons.Page>
    );
  }
}

module.exports = InfiniteScroll;
