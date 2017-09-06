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
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

class CommentsList extends Component {
  render() {
    return (
      <div style={{marginTop:10}}>
        <List>
     <Subheader>Today</Subheader>
     <ListItem
       leftAvatar={<Avatar src="images/ok-128.jpg" />}
       primaryText="Brunch this weekend?"
       secondaryText={
         <p>
           <span style={{color: darkBlack}}>Brendan Lim</span> --
           I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
         </p>
       }
       secondaryTextLines={2}
     />
     <Divider inset={true} />
     <ListItem
       leftAvatar={<Avatar src="images/kolage-128.jpg" />}
       primaryText={
         <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
       }
       secondaryText={
         <p>
           <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
           Wish I could come, but I&apos;m out of town this weekend.
         </p>
       }
       secondaryTextLines={2}
     />
     <Divider inset={true} />


   </List>
      </div>
    );
  }
}

export default CommentsList;
