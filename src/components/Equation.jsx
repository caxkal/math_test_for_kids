import React, { Component } from 'react';

export default class Equation extends Component {

    render() {
        const { first, op, second } = this.props
        let style = {
            display: 'inline-block',
            width: '50px',
            height: '20px',
            align: 'left'
        }
        let base_style = {
            padding: '10px',

        }
        return (
            <div style={base_style} class={this.props.class}>
                <span style={style}>{first} </span>
                <span style={style}>{op} </span>
                <span style={style}>{second}</span>
                <span style={style}>=</span>
                <input style={style}></input>
            </div>
        );
    }
}