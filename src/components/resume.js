import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Avatar from './thumbnail.png';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={Avatar}
                alt="avatar"
                style={{marginTop: '50px',height: '225px'}}
                 />
            </div>

            <h2 style={{paddingTop: '1em', fontFamily: 'Merriweather'}}>Nicholas Kenneth Naga Putra</h2>
            <h4 style={{color: 'grey', fontFamily: 'Merriweather'}}>Undergraduate</h4>
            <hr style={{borderTop: '5px solid rgb(2, 35, 97)', width: '50%'}}/>
            <p>
                Currently a second year undergraduate student at NTU. A really motivated individual who is passionate in research. I am willing to contribute on research topics including quantum computing, integrated circuits, and artificial intelligence. I'm also interested in web and application development.
            </p>
            <hr style={{borderTop: '5px solid rgb(2, 35, 97)', width: '50%'}}/>
            <h5 style={{fontFamily: 'Solway'}}>Address</h5>
            <p>Hall 12, Block 60-4-1181 30 Nanyang Crescent Singapore 637659</p>
            <h5 style={{fontFamily: 'Solway'}}>Phone</h5>
            <p>+65 9019 1369</p>
            <h5 style={{fontFamily: 'Solway'}}>Email</h5>
            <p>nicholas_kenneth@ymail.com</p>
            <hr style={{borderTop: '5px solid rgb(2, 35, 97)', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{fontFamily: 'Solway'}}>Education</h2>
            <Education
              startYear={2018}
              endYear={2022}
              schoolName="Nanyang Technological University"
              schoolMajor = "Electrical and Electronics Engineering with minor in Physics"
              schoolDescription="Currently in my second year pursuing on doing research after graduating."
               />
               {/* <Education
                startYear={2025}
                endYear={2029}
                schoolName="Massachussets Institute of Technology"
                schoolMajor = "Doctor of Philosophy EECS"
                schoolDescription="MIT is a world-leading research university."
                /> */}
                <hr style={{borderTop: '5px solid white'}} />
              <h2 style={{fontFamily: 'Solway'}}>Experience</h2>
            <Experience
              startMonth={"May"}
              startYear={2020}
              endMonth={"August"}
              endYear={2020}
              jobName="Internship"
              jobDescription="Looking for a summer internship."
              />
              <hr style={{borderTop: '5px solid white'}} />
              <h2 style={{fontFamily: 'Solway'}}>Skills</h2>
              <div styleName="skill-tags">
              <Skills
                skill={"Research"}
                />
                <Skills
                skill={"IC Design"}
                />
                <Skills
                skill={"Quantum Computing"}
                />
                <Skills
                skill={"JavaScript"}
                />
                <Skills
                skill={"ReactJS"}
                />
                <Skills
                skill={"HTML/CSS"}
                />
                <Skills
                skill={"Python3"}
                />
                <Skills
                skill={"PC Building"}
                />
                <Skills
                skill={"Adobe Illustrator"}
                />
              </div>
          </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;