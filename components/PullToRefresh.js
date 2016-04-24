import React from 'react';

import {
  Page,
  PullHook,
  Toolbar,
  BackButton,
  List,
  ListItem,
  ListHeader
} from 'react-onsenui';

class PullToRefresh extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pullHookState: 'initial',
      data: this.getRandomData()
    }
  }

  getRandomData() {
    const data = [];

    for (let i = 0; i < 20; i++) {
      data.push(Math.round(100*Math.random()));
    }

    return data;
  }

  handleChange(event) {
    this.setState({
      pullHookState: event.state
    });
  }

  handleLoad(done) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      this.setState({
        data: this.getRandomData()
      }, done);
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="left"><BackButton>Back</BackButton></div>
        <div className="center">Pull to refresh</div>
      </Toolbar>
    );
  }

  render() {
    let content;
    const state = this.state.pullHookState;

    if (state === 'initial') {
      content = 'Pull';
    }
    else if (state === 'preaction') {
      content = 'Release';
    }
    else {
      content = 'Loading';
    }

    return (
      <Page renderToolbar={this.renderToolbar}>
        <PullHook onChange={this.handleChange.bind(this)} onLoad={this.handleLoad.bind(this)}>
          {content}
        </PullHook>
        <p style={{padding: '0 15px'}}>Pull down to generate some random numbers.</p>

        <List
          dataSource={this.state.data}
          renderHeader={() => <ListHeader>Data</ListHeader>}
          renderRow={(row) => <ListItem>{row}</ListItem>}
        />
      </Page>
    );
  }
}

module.exports = PullToRefresh;
