import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import Popover from "material-ui/Popover";
import RaisedButton from "material-ui/RaisedButton";
import SearchIcon from "material-ui/svg-icons/action/search";
import TextField from "material-ui/TextField";

class Companies extends Component {
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
          <h2>Companies</h2>
        </div>
        <div>
          <Link to="/companies/add">
            <RaisedButton
              style={{ marginLeft: 24 }}
              label="Add"
              primary={true}
            />
          </Link>
          <SearchIcon
            style={{
              verticalAlign: "middle",
              padding: 24,
              display: "inline-flex"
            }}
          />
          <TextField hintText="search text" />
          <RaisedButton
            style={{ marginLeft: 24 }}
            label="Search"
            primary={true}
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Company name</TableHeaderColumn>
              <TableHeaderColumn>Active</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>Company 1</TableRowColumn>
              <TableRowColumn>Yes</TableRowColumn>
              <TableRowColumn>
                <RaisedButton label="Edit" primary={true} />
                <RaisedButton
                  label="Delete"
                  secondary={true}
                  style={{ marginLeft: 5 }}
                />
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Companies;
