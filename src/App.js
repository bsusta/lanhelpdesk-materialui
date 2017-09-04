import React, { Component } from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const style = {
  appBar: {
    position: 'fixed',
    top: 0,
    overflow: 'hidden',
    maxHeight: 57
  },
  drawer: {
    position: 'fixed',
  },
  menuItems: {
    paddingTop: 57,
  },
  contentIfOpen: {
    paddingLeft: 256,
  }
};

class App extends Component {

  constructor(props) {
  super(props);
  this.state = {open: false};
  }

  handleToggle = () => {
    this.setState({open: !this.state.open});
    console.log(this.state);
  }

  render() {
    return (
      <MuiThemeProvider>

      <div className="App">

      <Drawer
          open={this.state.open}
          docked={true}
          style={style.drawer}
          >
        <div style={style.menuItems}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        </div>

      </Drawer>

      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.handleToggle}
        style={style.appBar}
       />

     <Card style={this.state.open?style.contentIfOpen:null}>
       <Table>
  <TableHeader>
    <TableRow>
      <TableHeaderColumn>ID</TableHeaderColumn>
      <TableHeaderColumn>Name</TableHeaderColumn>
      <TableHeaderColumn>Status</TableHeaderColumn>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableRowColumn>1</TableRowColumn>
      <TableRowColumn>John Smith</TableRowColumn>
      <TableRowColumn>Employed</TableRowColumn>
    </TableRow>
    <TableRow>
      <TableRowColumn>2</TableRowColumn>
      <TableRowColumn>Randal White</TableRowColumn>
      <TableRowColumn>Unemployed</TableRowColumn>
    </TableRow>
    <TableRow>
      <TableRowColumn>3</TableRowColumn>
      <TableRowColumn>Stephanie Sanders</TableRowColumn>
      <TableRowColumn>Employed</TableRowColumn>
    </TableRow>
    <TableRow>
      <TableRowColumn>4</TableRowColumn>
      <TableRowColumn>Steve Brown</TableRowColumn>
      <TableRowColumn>Employed</TableRowColumn>
    </TableRow>
    <TableRow>
      <TableRowColumn>5</TableRowColumn>
      <TableRowColumn>Christopher Nolan</TableRowColumn>
      <TableRowColumn>Unemployed</TableRowColumn>
    </TableRow>
  </TableBody>
</Table>
     </Card>



      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
