const React = require('react');
const Ons = require('react-onsenui');

const ons = require('onsenui');

class InfiniteScroll extends React.Component {
  renderRow(index) {
    return (
      <Ons.ListItem>{'Item ' + index}</Ons.ListItem>
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
