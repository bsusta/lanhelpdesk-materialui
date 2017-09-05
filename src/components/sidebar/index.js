import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import { connect } from "react-redux";
import { logoutUser, openDrawer, closeDrawer } from "../../redux/actions";
import SidebarContent from "./sidebar";
import IconButton from "material-ui/IconButton";
import SettingsIcon from "material-ui/svg-icons/action/settings";
import LogOut from "material-ui/svg-icons/action/power-settings-new";
import { white } from "material-ui/styles/colors";
import { Link } from "react-router-dom";

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

class Sidebar extends Component {
  render() {
    return (
      <div className="App">
        <Drawer open={this.props.opened} docked={true}>
          <SidebarContent />
        </Drawer>

        <AppBar
          title="Lanhelpdesk Website"
          style={{
            backgroundColor: "#3F51B5",
            paddingLeft: this.props.opened ? 272 : 16
          }}
          iconElementRight={
            <span>
              <IconButton>
                <Link to="/settings">
                  <SettingsIcon color={white} />
                </Link>
              </IconButton>
              <IconButton>
                <LogOut color={white} onClick={this.props.logoutUser} />
              </IconButton>
            </span>
          }
          onLeftIconButtonTouchTap={
            this.props.opened ? this.props.closeDrawer : this.props.openDrawer
          }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ drawer }) => {
  const { opened } = drawer;
  return { opened };
};

export default connect(mapStateToProps, {
  logoutUser,
  openDrawer,
  closeDrawer
})(Sidebar);
