
import React, { Component } from 'react';

const ZARA = "ZARA"
const LILIT = "LILIT"

export default class CheckBoxes extends Component {

    changeUser = (e) => {
        this.props.onUserChange(e.target.value)
    }

    render() {
        return (
            <div>
                <div>
                    <input type="radio" value={ZARA}
                        checked={this.props.user === ZARA ? true : false}
                        onChange={this.changeUser} />
                    <label>1st Grade</label>
                </div>

                <div>
                    <input type="radio" value={LILIT}
                        checked={this.props.user === LILIT ? true : false}
                        onChange={this.changeUser} />
                    <label>3rd Grade</label>
                </div>
            </div>
        );
    }
}