import React from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox, ListItemContent } from 'react-toolbox/lib/list';
import { ResumeItem} from './ResumeItem';


const getWorkExperience = () => (
  [
    {
      companyName: "Microsoft Inc",
      companyIcon: "",
      startDate: "2014-09-01",
      endDate: "2016-09-11",
      position: "CTO",
      projects: [ {
        projectName: "Start",
        projectDesc: "start",
        projectRole: "developer",
        startDate: "2014-09-01",
        endDate: '2015-09-01'
        } 
      ]
    },
    {
      companyName: "Google Inc",
      companyIcon: "",
      startDate: "2011-04-01",
      endDate: "2014-09-01"
    },
  ]
);
export default class Resume extends React.Component {
    constructor(){
        super();
        this.state = {
            checkbox: false
        };
    }
  
    handleCheckboxChange() {
      this.setState({checkbox: !this.state.checkbox});
    };
  
    render () {
      const items = getWorkExperience().map(
        (item, idx) =>(<ListItem key={idx}><ResumeItem data={item}/></ListItem>)
      );
      return (
        <List selectable ripple>
          <ListSubHeader caption='Working Experience' />
          {items}
        </List>
      );
    }  
  }
  
