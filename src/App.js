import React, { Component } from "react";
import "./App.css";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import LogOut from 'material-ui/svg-icons/action/power-settings-new';
import {white} from 'material-ui/styles/colors';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import Paper from "material-ui/Paper";

const style = {
  appBar: {
    justifyContent: "flex-start",
    position: "relative",
    top: 0,
    overflow: "hidden",
    maxHeight: 57,
    textAlign: "left"
  },
  drawer: {
    position: "fixed"
  },
  menuItems: {
    paddingTop: 57,
    justifyContent: "flex-start",
    textAlign: "left"
  },
  contentIfOpen: {
    paddingLeft: 256,
    margin: 32,
    textAlign: "left"
  },
  contentIfClose: {
    margin: 32,
    textAlign: "left"
  },
  status: {
    backgroundColor: "blue",
    color: "white",
    padding: 5
  }
};



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
    console.log(this.state);
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Drawer open={this.state.open} docked={true} style={style.drawer}>
            <div style={style.menuItems}>
              <MenuItem>Projekt 1</MenuItem>
              <MenuItem>Projekt 2</MenuItem>
            </div>
          </Drawer>

          <AppBar
            title="LanHelpdeskRest"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
            iconElementRight={<span><IconButton><SettingsIcon color={white} /></IconButton> <IconButton><LogOut color={white}/></IconButton></span>}
            style={style.appBar}
          />

          <div
            style={this.state.open ? style.contentIfOpen : style.contentIfClose}
          >
            <h2>Projekt name</h2>
            <Paper style={style} zDepth={1} rounded={false}>
              <Table fixedHeader={true} style={{ tableLayout: "auto" }}>
                <TableBody>
                  <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Requester</TableHeaderColumn>
                    <TableHeaderColumn>Company</TableHeaderColumn>
                    <TableHeaderColumn>Assigned</TableHeaderColumn>
                    <TableHeaderColumn>Created</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                  </TableRow>

                  <TableRow>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>
                      Spraviť cenovú ponuku na SEO www.primaclima.sk a
                      carrier-transicold.hu
                    </TableRowColumn>
                    <TableRowColumn>John Smith</TableRowColumn>
                    <TableRowColumn>ASTON ESQUIRE s.r.o.</TableRowColumn>
                    <TableRowColumn>Randal White</TableRowColumn>
                    <TableRowColumn>8:00 27.9.2017</TableRowColumn>
                    <TableRowColumn>
                      <span style={style.status}>NEW</span>
                    </TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>Task 1</TableRowColumn>
                    <TableRowColumn>John Smith</TableRowColumn>
                    <TableRowColumn>ASTON ESQUIRE s.r.o.</TableRowColumn>
                    <TableRowColumn>Randal White</TableRowColumn>
                    <TableRowColumn>8:00 27.9.2017</TableRowColumn>
                    <TableRowColumn>
                      <span style={style.status}>NEW</span>
                    </TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>Task 1</TableRowColumn>
                    <TableRowColumn>John Smith</TableRowColumn>
                    <TableRowColumn>ASTON ESQUIRE s.r.o.</TableRowColumn>
                    <TableRowColumn>Randal White</TableRowColumn>
                    <TableRowColumn>8:00 27.9.2017</TableRowColumn>
                    <TableRowColumn>
                      <span style={style.status}>NEW</span>
                    </TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
