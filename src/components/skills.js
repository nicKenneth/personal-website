import React, { Component } from 'react';
import { Grid, ListItem, ListItemContent } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <ListItem>
            <ListItemContent icon="label" style={{color: 'white', display: 'flex'}}>{this.props.skill}</ListItemContent>
        </ListItem>
      </Grid>
    )
  }
}

export default Skills;