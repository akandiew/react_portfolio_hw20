import React from 'react';
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Thumbnail from "../components/Thumbnail";
import { Project } from '../components/Project';

function About() {
  const Project = [{
    title: "this project title",
    linkDeploy: "URL to deployment",
    linkGithub: "URL to GitHub",
    description: "project description",


  }]
  
  return (

    <div>
        <h1>Andy's Project Summary</h1>
        <Button>see GitHub profile</Button>
        <Button>see LinkedIn profile</Button>
        {/* <Button>View Details</Button> */}
        <Grid container>
          {/* <Grid item xs={4}><Thumbnail></Thumbnail></Grid>
          <Grid item xs={4}>1</Grid>
          <Grid item xs={4}>1</Grid> */}
          {Project.map((Project)=> <Grid item xs={4}><Thumbnail title={Project.title}><Button>Select</Button></Thumbnail></Grid>)}
          {Project.map((Project)=> <Grid item xs={4}><Thumbnail title={Project.title}><Button>Select</Button></Thumbnail></Grid>)}
          {Project.map((Project)=> <Grid item xs={4}><Thumbnail title={Project.title}><Button>Select</Button></Thumbnail></Grid>)}
          {/* {Projects.map((Project)=> <Grid item xs={4}><Thumbnail title={Project.title}></Thumbnail></Grid>)}
          <Button>View Details</Button>
          {Projects.map((Project)=> <Grid item xs={4}><Thumbnail title={Project.title}></Thumbnail></Grid>)}
          <Button>View Details</Button> */}
        </Grid>
    </div>
);
}

export default About;
