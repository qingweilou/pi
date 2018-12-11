import React from 'react';
import {Line} from 'react-chartjs-2';



export default class LineExample extends React.Component{
    render() {
        return (
            <div>
                <h2>Line example</h2>
                <Line data = {this.props.data}></Line>
            </div>
        );
    }
};