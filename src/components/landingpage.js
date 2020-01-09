import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from './thumbnail.png';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}} className="whole-page">
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={Avatar}
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Nicholas Kenneth Naga Putra</h1>
                            <h2>Undergraduate Researcher</h2>
                            <hr/>
                            <p>Quantum Computing | IC Design | PC | Web Development</p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="http://linkedin.com/in/nicholas-kenneth-naga-putra-068845177/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/nicKenneth" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github" aria-hidden="true" />
                                </a>

                                {/* Instagram */}
                                <a href="http://www.instagram.com/nick_kenneth/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;