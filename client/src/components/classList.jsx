import React, { Component } from 'react';

export default class ClassList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerLine : ['School', 'Subject', 'Class Name', 'Course Number', 'Class Description', 'Units', 'Term', 'Start Date', 'End Date', 'Price'],

        }
    }


    render () {
        return (
            <table>
                <tr>
                    {this.state.headerLine.map((item, index) => {
                        return <th key={index}>{item}</th>
                    })}
                </tr>
            </table>
        )
    }
}