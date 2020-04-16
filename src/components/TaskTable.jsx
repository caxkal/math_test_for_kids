
import React, { Component } from 'react';
import Equation from './Equation'

const TASK_COUNT = 10;
const ZARA = "ZARA"

export default class TaskTable extends Component {

    getOps = (task) => {
        const plus = Array(5).fill("+")
        const minus = Array(10).fill("-")
        const mul = Array(10).fill("*")
        const div = Array(10).fill("/")
        // eslint-disable-next-line default-case
        switch (task) {
            case "div":
                return div;
            case "add":
                return plus;
            case "mul":
                return mul;
            case "sub":
                return minus;
            default:
                const div1 = Array(150).fill("/")
                return this.props.user === ZARA ?
                    [...plus, ...minus] :
                    [...plus, ...minus, ...div1, ...mul]
        };
    }

    getTasks = () => {
        var equations = [];
        const complexity = this.props.user === ZARA ? 20 : 1000
        let ops = this.getOps(this.props.task)
        let count = 0
        while (count < TASK_COUNT) {
            let first = Math.floor(Math.random() * complexity)
            let second = Math.floor(Math.random() * complexity)
            let opsIndex = Math.floor(Math.random() * ops.length)
            if ('*' === ops[opsIndex]) {
                const min = Math.min(first, second) % 10
                const max = Math.max(first, second)
                first = max
                second = min
                if (min < 2)
                    continue
            }

            if ('-' === ops[opsIndex] || '/' === ops[opsIndex]) {
                const max = Math.max(first, second)
                const min = Math.min(first, second)
                first = max
                second = min
            }

            if ('/' === ops[opsIndex]) {
                second %= 10
                if (second < 2 || first % second !== 0)
                    continue
            }
            equations.push(<Equation class="eq" first={first} second={second} op={ops[opsIndex]} ></Equation >);
            count++;
        }
        return equations
    }

    render() {
        const table_styles = {
            width: '100%',
            padding: '10px',
        }

        const td_styles = {
            background: "#8777"
        }

        return (
            <table border="3" style={table_styles}>
                <tbody>
                    <tr>
                        <td style={td_styles}>{this.getTasks()}</td>
                        <td style={td_styles}>{this.getTasks()}</td>
                        <td style={td_styles}>{this.getTasks()}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}