const React = require('react');
const Ons = require('react-onsenui');

class SpeedDial extends React.Component {
  render() {
    return (
      <Ons.Page>
        <Ons.Toolbar>
          <div className="left"><Ons.BackButton>Back</Ons.BackButton></div>
          <div className="center">Speed dial</div>
        </Ons.Toolbar>

        <p>A speed dial is a Floating action button that expands into a menu.</p>

        <Ons.SpeedDial position="right bottom" direction="up">
          <Ons.Icon icon="md-car"></Ons.Icon>
          <Ons.SpeedDialItem>A</Ons.SpeedDialItem>
          <Ons.SpeedDialItem>B</Ons.SpeedDialItem>
          <Ons.SpeedDialItem>C</Ons.SpeedDialItem>
        </Ons.SpeedDial>
      </Ons.Page>
    );
  }
}

module.exports = SpeedDial;
