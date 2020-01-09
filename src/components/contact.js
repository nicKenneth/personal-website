import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Avatar from './thumbnail.png';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Nicholas Kenneth Naga Putra</h2>
                    <img
                    src={Avatar}
                    alt="avatar"
                    style={{height: '250px'}}
                    />
                    <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Hi! I'm a beginner freelance web developer. This is my first ever personal website, really sorry for the inconvenience that I may have made! I'm looking forward to work with you.</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
                        <ListItem>
                        <ListItemContent style={{fontSize: '22.5px', fontFamily: 'Solway'}}>
                            <i className="fa fa-phone-square" aria-hidden="true"/>
                            +65 9019 1369
                        </ListItemContent>
                        </ListItem>
            
                        <ListItem>
                        <ListItemContent style={{fontSize: '20px', fontFamily: 'Solway'}}>
                            {/* can use className and edit in CSS */}
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            nicholas_kenneth@ymail.com
                        </ListItemContent>
                        </ListItem>
                    </List>
                    </div>
                </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;