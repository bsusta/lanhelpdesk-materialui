import React, { Component } from "react";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";

import {editUnit} from '../../../redux/actions';
import {processInteger} from '../../helperFunctions';


class UnitEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_active:this.props.unit.is_active? true : false,
      title:this.props.unit.title? this.props.unit.title : "",
      shortcut:this.props.unit.shortcut? this.props.unit.shortcut : "",
    };
  }

  submit(){
    let unit=Object.assign({},this.state);
    this.props.editUnit(unit,this.props.id);
    this.props.history.goBack();
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
          <h2>Add item unit</h2>
        </div>
        <Checkbox label="Active" checked={this.state.is_active} onCheck={()=>this.setState({is_active:!this.state.is_active})} />
        <TextField
          hintText=""
          floatingLabelText="Unit name"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({title:value})}
          value={this.state.title}
        />
        <TextField
          hintText=""
          floatingLabelText="Unit shortcut"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event,value)=>this.setState({shortcut:value})}
          value={this.state.shortcut}
        />
        <div style={{marginTop:20,}}>
          <RaisedButton
            label="Cancel"
            onClick={this.props.history.goBack}
            secondary={true}
          />
          <RaisedButton
            style={{ position: "absolute", right:10}}
            label="Save"
            onClick={this.submit.bind(this)}
            primary={true}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ taskData }) => {
  return {};
};

export default connect(mapStateToProps, {editUnit})(UnitEdit);
