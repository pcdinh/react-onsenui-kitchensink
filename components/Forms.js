import React from 'react';

import ons from 'onsenui';
import Ons from 'react-onsenui';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      switchEnabled: true,
      vegetables: [
        'Tomato',
        'Cabbage',
        'Cucumber'
      ],
      selectedVegetable: 'Cabbage',
      colors: [
        'Red',
        'Blue',
        'Green',
        'Yellow'
      ],
      name: 'Andreas'
    };
  }

  handleSwitchChange(event) {
    this.setState({
      switchEnabled: event.target.checked
    });
  }

  setVegetable(vegetable) {
    this.setState({
      selectedVegetable: vegetable
    });
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return (
      <Ons.Page>
        <Ons.Toolbar>
          <div className="center">Forms</div>
        </Ons.Toolbar>

        <Ons.List
          dataSource={[
            <Ons.ListItem>
              <div className="center">
                Switch ({this.state.switchEnabled ? 'on' : 'off'})
              </div>
              <div className="right">
                <Ons.Switch
                  checked={this.state.switchEnabled}
                  onChange={this.handleSwitchChange.bind(this)}
                />
              </div>
            </Ons.ListItem>,
            <Ons.ListItem>
              <div className="center">
                Disabled switch
              </div>
              <div className="right">
                <Ons.Switch disabled />
              </div>
            </Ons.ListItem>
          ]}
          renderHeader={() => <Ons.ListHeader>Switches</Ons.ListHeader>}
          renderRow={(row) => row}
        />

        <Ons.List
          dataSource={this.state.vegetables}
          renderHeader={() => <Ons.ListHeader>Radio buttons</Ons.ListHeader>}
          renderFooter={() => <Ons.ListItem>I love&nbsp;{this.state.selectedVegetable}!</Ons.ListItem>}
          renderRow={(vegetable, index) => {
            return (
              <Ons.ListItem tappable>
                <label className="left">
                  <Ons.Input input-id={'radio' + index} name="vegetable" onChange={this.setVegetable.bind(this, vegetable)} checked={this.state.selectedVegetable === vegetable} type="radio" />
                </label>
                <label htmlFor={'radio' + index} className="center">
                  {vegetable}
                </label>
              </Ons.ListItem>
            );
          }}
        />

        <Ons.List
          dataSource={this.state.colors}
          renderHeader={() => <Ons.ListHeader>Checkboxes</Ons.ListHeader>}
          renderRow={(color, index) => {
            return (
              <Ons.ListItem tappable>
                <label className="left">
                  <Ons.Input input-id={'checkbox' + index} type="checkbox" />
                </label>
                <label htmlFor={'checkbox' + index} className="center">
                  {color}
                </label>
              </Ons.ListItem>
            );
          }}
        />

        <Ons.List
          dataSource={[0, 1]}
          renderHeader={() => <Ons.ListHeader>Text input</Ons.ListHeader>}
          renderRow={(_, index) => {
            if (index === 0) {
              return (
                <Ons.ListItem>
                  <Ons.Input value={this.state.name} onChange={this.handleNameChange.bind(this)} placeholder="Name" float />
                </Ons.ListItem>
              );
            }
            else {
              return (
                <Ons.ListItem>
                  Hello&nbsp;{this.state.name}!
                </Ons.ListItem>
              );
            }
          }}
        />
      </Ons.Page>
    );
  }
}

module.exports = Forms;
