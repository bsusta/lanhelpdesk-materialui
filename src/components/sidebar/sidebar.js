import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import Badge from 'material-ui/Badge';
import {getProjects} from '../../redux/actions';
import { Link } from "react-router-dom";

class Sidebar extends Component {

  componentWillMount(){
    this.props.getProjects();
  }

  render() {
    if(this.props.loadingProjects){
      return (<div>Loading...</div>);
    }
    return (
      <div style={{
        paddingTop: 100,
        justifyContent: "flex-start",
        textAlign: "left"
      }}>

      <Link to="/task/edit">Task edit</Link>
      <MenuItem disabled={true} style={{color:'#3F51B5'}}>
        <h2>Projekty</h2>
      </MenuItem>

        {
          this.props.projects.map((project)=>
            <MenuItem key={project.id}>{project.title}
              <Badge
                style={{top:15}}
                badgeContent={project.numberOfTasks}
                secondary={true}
              />
            </MenuItem>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = ({taskData,login}) => {
  const {projects,loadingProjects} = taskData;
  return {projects,loadingProjects};
};

export default connect(mapStateToProps,{getProjects})(Sidebar);
