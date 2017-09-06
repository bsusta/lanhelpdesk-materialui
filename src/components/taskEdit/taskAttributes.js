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
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";

class TaskAttributes extends Component {
  render() {
    return (
      <div style={{marginTop:10}}>
          <h1>Attributes</h1>
      </div>
    );
  }
}

export default TaskAttributes;
