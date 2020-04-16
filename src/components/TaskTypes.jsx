import React, { Component } from 'react';

export default class TaskTypes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "mix"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onSelect(event.target.value)
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value='add'>Add</option>
                        <option value='sub'>Sub</option>
                        <option value='mul'>Mult</option>
                        <option value='div'>Div</option>
                        <option value='mix'>Mixed</option>
                    </select>
                </label>
            </form>
        );
    }
}