
import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import CheckBoxes from './CheckBoxes'
import TaskTypes from './TaskTypes'
import TaskTable from './TaskTable'

export default class MathPage extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            isHidden: true,
            task: "",
            user: ""
        }
    }

    checkResults = (e) => {
        const node = this.myRef.current;
        let equations = node.getElementsByClassName("eq");
        let isFail = false;
        for (let i = 0; i < equations.length; i++) {
            let first = equations[i].children[0].textContent
            let op = equations[i].children[1].textContent
            let second = equations[i].children[2].textContent
            let golder = eval(first + op + second)
            let result = parseInt(equations[i].children[4].value)
            if (golder !== result) {
                equations[i].children[4].style.color = 'red'
                isFail = true
            } else {
                equations[i].children[4].style.color = 'green'
            }
        }

        if (!isFail) {
            this.setState({ isHidden: false })
        }
    }

    onChange = (newUser) => {
        this.setState({ user: newUser });
    }

    onTaskSelect = (newTask) => {
        this.setState({ task: newTask });
    }

    render() {
        return (
            <div ref={this.myRef} >
                <CheckBoxes user={this.state.user} task={this.state.task}
                    onUserChange={this.onChange}></CheckBoxes>
                <TaskTypes task={this.state.task} onSelect={this.onTaskSelect} />
                <TaskTable task={this.state.task} user={this.state.user} />
                <Button onClick={(e) => this.checkResults(e)} disabled="true"> Check</Button >
                <Button onClick={(e) => window.location.reload(false)} >Next </Button>
            </div>
        );
    }
}