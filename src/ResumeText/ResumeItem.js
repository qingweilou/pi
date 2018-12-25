import React from 'react';
import styles from './ResumeItem.css'

const divStyle = {
    margin: '10px',
    fontSize: '20px'
};
export class ResumeItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: true,
        };
        this.onHeaderClick = this.onHeaderClick.bind(this);
    }

    onHeaderClick() {
        this.setState({detail: !this.state.detail})
    };

    render() {
        return (
            <div onClick = {this.onHeaderClick}>        
                <div className={styles.Title}>{this.props.data.companyName}</div> 
                <div className={styles.DateRange}>{this.props.data.startDate} to {this.props.data.endDate}</div>
            </div> 
        );
    };
}