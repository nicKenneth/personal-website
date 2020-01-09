import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0){
            return(
              <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQE2gw4duQwt2UTZ8XzEj9PiW5WccLxlwW3UYluYDNF_DcAA194) center / cover'}} >URECA Project</CardTitle>
                  <CardText>
                    Distributed wireless power and data transmission for a network of neural nodes in the brain.
                  </CardText>
                  <CardActions border>
                    <Button colored>Paper</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
            )
          } else if(this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfFYKhBM-6zlGv7H_qt341mk4ln_ggV5N4BQkqjDEuXGvJGN2D) center / cover'}} >Quantum Computing Project</CardTitle>
                  <CardText>
                    Hoping to be involved in a Quantum Computing research in the next few years.
                  </CardText>
                  <CardActions border>
                    {/* <Button colored>Paper</Button> */}
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
            )
          } else if(this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
                  <CardText>
                    Developed the marketing page for ICN 2020.
                  </CardText>
                  <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
            )
          } else if(this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                  <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://singularityhub.com/wp-content/uploads/2018/07/artificial-intelligence-neural-networks_shutterstock_788818321.jpg) center / cover'}} >skinTech</CardTitle>
                  <CardText>
                    Developed an app that predicts skin cancer.
                  </CardText>
                  <CardActions border>
                    <Button colored href="https://github.com/Andreas-Sujono/skinTech" target="_blank">GitHub</Button>
                    <Button colored>Live Demo</Button>
                  </CardActions>
                  <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
              </div>
            )
          }
    }

    render() {
        return(
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{fontFamily: 'Solway'}}>IC</Tab>
                    <Tab style={{fontFamily: 'Solway'}}> Quantum Tech</Tab>
                    <Tab style={{fontFamily: 'Solway'}}>Web Development</Tab>
                    <Tab style={{fontFamily: 'Solway'}}>Machine Learning</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;