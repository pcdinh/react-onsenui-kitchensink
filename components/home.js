const React = require('react');
const Ons = require('react-onsenui');
const ons = require('onsenui');

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

  render() {
    return (
      <Ons.Page>
        <Ons.Toolbar><div className="center">Home</div></Ons.Toolbar>

        <p>
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
      </Ons.Page>
    );
  }
}

module.exports = Home;
