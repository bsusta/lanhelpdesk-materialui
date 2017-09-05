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
import Checkbox from "material-ui/Checkbox";

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

class CompanyAdd extends Component {
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
          <h2>CompanyAdd</h2>
        </div>
        <Checkbox label="Active" />
        <TextField
          hintText=""
          floatingLabelText="Company name"
          floatingLabelFixed={true}
          fullWidth={true}
        />
        <TextField
          hintText=""
          floatingLabelText="ICO"
          floatingLabelFixed={true}
          fullWidth={true}
        />
        <TextField
          hintText=""
          floatingLabelText="DIC"
          floatingLabelFixed={true}
          fullWidth={true}
        />
        <TextField
          hintText=""
          floatingLabelText="IC DPH"
          floatingLabelFixed={true}
          fullWidth={true}
        />
        <TextField
          hintText=""
          floatingLabelText="Phone"
          floatingLabelFixed={true}
          fullWidth={true}
        />
        <TextField
          hintText=""
          floatingLabelText="Street"
          floatingLabelFixed={true}
          fullWidth={true}
        />
        <TextField
          hintText=""
          floatingLabelText="City"
          floatingLabelFixed={true}
          fullWidth={true}
        />
        <TextField
          hintText=""
          floatingLabelText="PSC"
          floatingLabelFixed={true}
          fullWidth={true}
        />
        <TextField
          hintText=""
          floatingLabelText="Country"
          floatingLabelFixed={true}
          fullWidth={true}
        />
        <div style={{marginTop:20,}}>
          <RaisedButton
            label="Cancel"
            secondary={true}
          />
          <RaisedButton
            style={{ position: "absolute", right:10}}
            label="Save"
            primary={true}
          />
        </div>
      </div>
    );
  }
}

export default CompanyAdd;
