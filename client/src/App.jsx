import React, { Component } from 'react';
import ClassList from './components/classList.jsx';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        return (
            <div>
                Things needed:<br />
                header (all pages)<br />
                search bar<br />
                sort<br />
                <ul>
                    <li>department</li>
                    <li>school</li>
                </ul>
                <ClassList></ClassList>
            </div>
        )
    }
}