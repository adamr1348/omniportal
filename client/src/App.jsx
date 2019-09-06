import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    render () {
        return (
            <div>
                Things needed:<br />
                header (all pages)<br />
                search bar<br />
                filter dropdown/search bar for<br />
                <ul>
                    <li>department</li>
                    <li>school</li>
                    <li>school system (UC, CSU, etc) (may not be needed)</li>
                </ul>
                class list (pagenated)
            </div>
        )
    }
}