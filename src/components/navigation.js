import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Sidebar from './sidebar';
import TaskList from './taskList/taskList';


class Navigation extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Sidebar/>
          <div style={{paddingLeft:(this.props.opened?256:0)}}>
            <Switch>
            <Route exact path="/" component={ TaskList } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({drawer}) => {
  const {opened} = drawer;
  return {opened};
};

export default connect(mapStateToProps,{})(Navigation);
