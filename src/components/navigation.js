import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Sidebar from "./sidebar";
import TaskList from "./taskList/taskList";
import TaskEdit from "./taskEdit";
import SettingsList from "./settings/settingsList";
import Companies from "./settings/companies";
import CompanyAdd from "./settings/companies/companyAdd";
import CompanyEdit from "./settings/companies/companyEdit";
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
      <Router>
        <div>
          <Sidebar />
          <div style={{ paddingLeft: this.props.opened ? 256 : 0 }}>
            <Switch>
              <Route path="/task/edit" component={TaskEdit} />
              <Route exact path="/settings" component={SettingsList} />
              <Route exact path="/settings/companies" component={Companies} />
              <Route exact path="/settings/companies/add" component={CompanyAdd} />
              <Route path="/settings/companies/edit" component={CompanyEdit} />
              <Route path="/settings/imaps" component={Imaps} />
              <Route path="/settings/roles" component={Roles} />
              <Route path="/settings/smtps" component={Smtps} />
              <Route path="/settings/statuses" component={Statuses} />
              <Route path="/settings/task-attributes" component={TaskAttributes} />
              <Route path="/settings/units" component={Units} />
              <Route path="/settings/users" component={Users} />
              <Route path="/" component={TaskList} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ drawer }) => {
  const { opened } = drawer;
  return { opened };
};

export default connect(mapStateToProps, {})(Navigation);
