import React from 'react';

import ons from 'onsenui';
import Ons from 'react-onsenui';

import PullToRefresh from './pullToRefresh';
import InfiniteScroll from './infiniteScroll';
import FloatingActionButton from './floatingActionButton';
import SpeedDial from './speedDial';

const initialPlatform = ons.platform.isAndroid() ? 'android' : 'ios';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      platforms: ['auto', 'android', 'ios'],
      selectedPlatform: 'auto'
    };
  }

  setPlatform(platform) {
    this.setState({
      selectedPlatform: platform
    }, () => {
      if (platform === 'auto') {
        platform = initialPlatform;
      }

      ons.forcePlatformStyling(platform);
    });
  }

  getPlatformName(platform) {
    if (platform === 'auto') {
      return 'Automatic';
    }
    else if (platform === 'ios') {
      return 'iOS';
    }
    else {
      return 'Android';
    }
  }

  gotoComponent(component) {
    this.props.navigator.pushPage({comp: component});
  }

  render() {
    return (
      <Ons.Page>
        <Ons.Toolbar><div className="center">Home</div></Ons.Toolbar>

        <p style={{padding: '0 15px'}}>
          This is a kitchen sink example that shows off the React extension for Onsen UI.
        </p>

        <Ons.List
          renderHeader={() => <Ons.ListHeader>Select platform</Ons.ListHeader>}
          dataSource={this.state.platforms}
          renderRow={(row, index) => {
            return (
              <Ons.ListItem tappable>
                <label className="left">
                  <Ons.Input
                    input-id={'platform' + index}
                    name="platform"
                    onChange={this.setPlatform.bind(this, row)}
                    checked={this.state.selectedPlatform === row}
                    type = "radio" />
                </label>

                <label htmlFor={'platform' + index} className="center">
                  {this.getPlatformName(row)}
                </label>
              </Ons.ListItem>
            );
          }}
        />

        <Ons.List
          renderHeader={() => <Ons.ListHeader>Components</Ons.ListHeader>}
          dataSource={[{
            name: 'Pull to refresh',
            component: PullToRefresh
          }, {
            name: 'Infinite scroll',
            component: InfiniteScroll
          }, {
            name: 'Floating action button',
            component: FloatingActionButton
          }, {
            name: 'Speed dial',
            component: SpeedDial
          }]}
          renderRow={(row) =>
            <Ons.ListItem tappable onClick={this.gotoComponent.bind(this, row.component)}>
              {row.name}
            </Ons.ListItem>
          }
        />
      </Ons.Page>
    );
  }
}

module.exports = Home;
