import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { List, ListItem } from "material-ui/List";
import Popover from "material-ui/Popover";
import Divider from "material-ui/Divider";

class SettingsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bulkOpen: false,
      bulkPosition: null
    };
  }

  render() {
    return (
      <div>
        <div
          style={{
            borderBottom: "thick solid black",
            borderWidth: 1,
            marginBottom: 10
          }}
        >
          <h2>Settings</h2>
        </div>
        <List>
          <ListItem primaryText={<Link to="/companies">Companies</Link>} />
          <Divider />
          <ListItem primaryText={<Link to="/imaps">IMAPs</Link>} />
          <Divider />
          <ListItem primaryText={<Link to="/roles">Roles</Link>} />
          <Divider />
          <ListItem primaryText={<Link to="/smtps">SMTPs</Link>} />
          <Divider />
          <ListItem primaryText={<Link to="/statuses">Statuses</Link>} />
          <Divider />
          <ListItem
            primaryText={<Link to="/task-attributes">Task attributes</Link>}
          />
          <Divider />
          <ListItem primaryText={<Link to="/units">Units</Link>} />
          <Divider />
          <ListItem primaryText={<Link to="/users">Users</Link>} />
          <Divider />
        </List>
      </div>
    );
  }
}

export default SettingsList;
