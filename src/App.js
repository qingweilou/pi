import React, { Component } from 'react';
import TabExample from './PITabs';
import {PIAppBar} from './PIAppBar';

export default class App extends Component {
    render() {       
       return (
            <div>
            <PIAppBar/>
            <TabExample/>
            </div>
        );
    }
}
