import React from 'react';

import ons from 'onsenui';
import Ons from 'react-onsenui';

const capitalize = (str) =>
  str.replace(/^[a-z]/, (c) => c.toUpperCase());

class MyPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 5
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        counter: this.state.counter - 1
      }, () => {
        if (this.state.counter === 0) {
          clearInterval(this.interval);
          this.props.popPage();
        }
      });
    }, 200);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <Ons.Page>
        <div
          style={{
            textAlign: 'center',
            height: '100%'
          }}>
          <span
            style={{
              display: 'inline-block',
              position: 'relative',
              top: '50%',
              fontSize: '26px',
              transform: 'translate3d(0, -50%, 0)'
            }}>
            Please wait...<br />
            {this.state.counter}
          </span>
         </div>
      </Ons.Page>
    );
  }
}

class Animations extends React.Component {
  pushPage(transition) {
    const nav = this.props.navigator;

    nav.pushPage({
      comp: MyPage,
      props: {
        popPage: () => nav.popPage({animation: transition})
      }
    }, {animation: transition});
  }

  render() {
    return (
      <Ons.Page>
        <Ons.Toolbar>
          <div className="center">Animations</div>
        </Ons.Toolbar>

        <Ons.List
          renderHeader={() => <Ons.ListHeader>Transitions</Ons.ListHeader>}
          dataSource={['none', 'fade', 'slide']}
          renderRow={(row) =>
            <Ons.ListItem
              tappable
              onClick={this.pushPage.bind(this, row)}>
              {capitalize(row)}
            </Ons.ListItem>
          }
        />
      </Ons.Page>
    );
  }
}

module.exports = Animations;
