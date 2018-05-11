import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import { List, ListItem } from 'material-ui/List';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  constructor() {
    super();
    this.state = {
      drawerOpened: false
    }
  }

  _toggleDrawer() {
    this.setState({
      drawerOpened: !this.state.drawerOpened
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="React App With Material UI" onLeftIconButtonClick={() => this._toggleDrawer()} />
          <Drawer open={this.state.drawerOpened} docked={false} onRequestChange={() => this._toggleDrawer()} >
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              <ListItem>Item 3</ListItem>
            </List>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
