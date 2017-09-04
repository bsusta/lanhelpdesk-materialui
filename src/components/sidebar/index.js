import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import {logoutUser, openDrawer, closeDrawer} from '../../redux/actions';
import SidebarContent from './sidebar';

class Sidebar extends Component {

  render() {
    return (
        <div className="App">
          <Drawer
              open={this.props.opened}
              docked={true}
              >
            <SidebarContent/>
          </Drawer>

          <AppBar
            title="Lanhelpdesk Website"
            style={{backgroundColor:'#3F51B5',paddingLeft:(this.props.opened?272:16)}}
            iconElementRight={<FlatButton label="LogOut" onClick={this.props.logoutUser} />}
            onLeftIconButtonTouchTap={this.props.opened?this.props.closeDrawer:this.props.openDrawer}
           />
        </div>
    );
  }
}

const mapStateToProps = ({drawer}) => {
  const {opened} = drawer;
  return {opened};
};

export default connect(mapStateToProps,{logoutUser,openDrawer,closeDrawer})(Sidebar);
