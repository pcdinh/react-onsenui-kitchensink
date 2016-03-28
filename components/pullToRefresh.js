const React = require('react');
const Ons = require('react-onsenui');

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
    console.log("HI");
    this.setState({
      pullHookState: event.state
    });
  }

  handleLoad(done) {
    setTimeout(() => {
      this.setState({
        data: this.getRandomData()
      }, done);
    }, 1000);
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
      <Ons.Page>
        <Ons.PullHook onChange={this.handleChange.bind(this)} onLoad={this.handleLoad.bind(this)}>
          {content}
        </Ons.PullHook>
        <Ons.Toolbar>
          <div className="left"><Ons.BackButton>Back</Ons.BackButton></div>
          <div className="center">Pull to refresh</div>
        </Ons.Toolbar>

        <p>Pull down to generated some random numbers.</p>

        <Ons.List
          dataSource={this.state.data}
          renderHeader={() => <Ons.ListHeader>Data</Ons.ListHeader>}
          renderRow={(row) => <Ons.ListItem>{row}</Ons.ListItem>}
        />
      </Ons.Page>
    );
  }
}

module.exports = PullToRefresh;
