import React from 'react';
import {Tab, Tabs} from 'react-toolbox';
import Resume from './ResumeText/Resume';
import TimeLine from './TimeLine';

export default class PITabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            fixedIndex: 0,
            inverseIndex: 0
        };
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleFixedTabChange = this.handleFixedTabChange.bind(this);
        this.handleInverseTabChange = this.handleInverseTabChange.bind(this);
        this.handleActive = this.handleActive.bind(this);
    }
  
    handleTabChange(index)  {
        this.setState({index});
    };
  
    handleFixedTabChange(index) {
        this.setState({fixedIndex: index});
    };
  
    handleInverseTabChange(index) {
      this.setState({inverseIndex: index});
    };
  
    handleActive() {
      console.log('Special one activated');
    };
  
    render () {
      return (    
        <Tabs index={this.state.index} onChange={this.handleTabChange}>
          <Tab label='Resume'> <Resume/></Tab>
          <Tab label='TimeLine'><TimeLine/></Tab>
        </Tabs>
      );
    }
  }
  