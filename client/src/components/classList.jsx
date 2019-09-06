import React, { Component } from 'react';
import axios from 'axios';
import ClassListEntry from './classListEntry.jsx';

export default class ClassList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerLine  : ['School', 'Subject', 'Course Number', 'Class Name', 'Class Description', 'Units', 'Term', 'Price', 'Start Date', 'End Date'],
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
                })
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
                {this.state.courses.map((item, index) => {
                    let styling = index % 2 === 0 ? 'even' : 'odd'
                    return <ClassListEntry class={item} key={index} className={styling}></ClassListEntry>
                })}
            </table>
        )
    }
}