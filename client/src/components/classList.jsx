import React, { Component } from 'react';
import axios from 'axios';

export default class ClassList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerLine  : ['School', 'Subject', 'Class Name', 'Course Number', 'Class Description', 'Units', 'Term', 'Start Date', 'End Date', 'Price'],
            courses     : [],
            filerString : ''
        }
    }

    componentDidMount () {
        axios
            .get('/api/classes')
            .then(data => {
                this.setState({
                    courses: data.data
                }, () => console.log(this.state.courses))
            })
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