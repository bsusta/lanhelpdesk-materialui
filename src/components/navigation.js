import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Sidebar from "./sidebar";
import TaskList from "./taskList/taskList";
import SettingsList from "./settings/settingsList";
import Companies from "./settings/companies";
import CompanyAdd from "./settings/companies/companyAdd";
import Imaps from "./settings/imaps";
import Roles from "./settings/roles";
import Smtps from "./settings/smtps";
import Statuses from "./settings/statuses";
import TaskAttributes from "./settings/taskAttributes";
import Units from "./settings/units";
import Users from "./settings/users";


class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Sidebar />
          <div style={{ paddingLeft: this.props.opened ? 256 : 0 }}>
            <Switch>
              <Route exact path="/" component={TaskList} />
              <Route path="/settings" component={SettingsList} />
              <Route path="/companies" component={Companies} />
              <Route path="/company-add" component={CompanyAdd} />
              <Route path="/imaps" component={Imaps} />
              <Route path="/roles" component={Roles} />
              <Route path="/smtps" component={Smtps} />
              <Route path="/statuses" component={Statuses} />
              <Route path="/task-attributes" component={TaskAttributes} />
              <Route path="/units" component={Units} />
              <Route path="/users" component={Users} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ drawer }) => {
  const { opened } = drawer;
  return { opened };
};

export default connect(mapStateToProps, {})(Navigation);
