const React = require('react');

const Ons = require('react-onsenui');
const ons = require('onsenui');

class Dialogs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dialogOpen: false
    };
  }

  toggleDialog() {
    console.log('toggle');
    this.setState({
      dialogOpen: !this.state.dialogOpen
    });
  }

  render() {
    return (
      <Ons.Page>
        <Ons.Toolbar>
          <div className="center">Dialogs</div>
        </Ons.Toolbar>

        <Ons.List
          dataSource={[
            <Ons.ListItem
              tappable
              onClick={this.toggleDialog.bind(this)}>
              Show dialog ({this.state.dialogOpen ? 'open' : 'closed'})
            </Ons.ListItem>
          ]}
          renderHeader={() => <Ons.ListHeader>Dialogs</Ons.ListHeader>}
          renderRow={(row) => row}
        />

        <Ons.List
          dataSource={[
            <Ons.ListItem
              tappable
              onClick={ons.notification.alert.bind(null, 'Hello, world!')}>
              Alert dialog
            </Ons.ListItem>,
            <Ons.ListItem
              tappable
              onClick={ons.notification.confirm.bind(null, {
                message: 'Do you like React?',
                buttonLabels: ['Yes!', 'Of course!']
              })}>
              Confirmation dialog
            </Ons.ListItem>,
            <Ons.ListItem
              tappable
              onClick={ons.notification.prompt.bind(null, {
                message: 'What is your name?'
              })}>
              Prompt dialog
            </Ons.ListItem>
          ]}
          renderHeader={() => <Ons.ListHeader>Notifications</Ons.ListHeader>}
          renderRow={(row) => row}
        />

        <Ons.Dialog
          style={{textAlign: 'center'}}
          isOpen={this.state.dialogOpen}
          onCancel={this.toggleDialog.bind(this)}
          cancelable>
          <p>I am a dialog!</p>
          <p>
            <Ons.Button onClick={this.toggleDialog.bind(this)}>Close me!</Ons.Button>
          </p>
        </Ons.Dialog>
      </Ons.Page>
    );
  }
}

module.exports = Dialogs;
