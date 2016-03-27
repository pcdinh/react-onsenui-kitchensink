const React = require('react');

const Ons = require('react-onsenui');
const ons = require('onsenui');

class Dialogs extends React.Component {
  render() {
    return (
      <Ons.Page>
        <Ons.Toolbar>
          <div className="center">Dialogs</div>
        </Ons.Toolbar>

        <Ons.List
          dataSource={[
            <Ons.ListHeader>Notifications</Ons.ListHeader>,
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
          renderRow={(row) => row}
        />
      </Ons.Page>
    );
  }
}

module.exports = Dialogs;
