import React, { Component } from 'react';

export default class Timer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            time: 0,
            start: 0,
            isOn: false
        }
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

    componentDidMount() {
        this.startTimer()
    }

    getTime() {
        let sec = Math.floor((Date.now() - this.state.start) / 1000)
        let min = (sec > 60) ? Math.floor(sec / 60) + "min " : ""
        return min + sec % 60 + " sec"
    }

    startTimer() {
        this.setState({
            time: this.state.time,
            start: Date.now() - this.state.time,
            isOn: true
        })
        this.timer = setInterval(() => this.setState({
            time: this.getTime(this.state.start)
        }), 500);
    }

    stopTimer() {
        this.setState({ isOn: false })
        clearInterval(this.timer)
    }

    resetTimer() {
        this.setState({ time: 0 })
    }

    render() {
        let start = (this.state.time === 0) ?
            <button onClick={this.startTimer}>start</button> :
            null
        let stop = (this.state.isOn) ?
            <button onClick={this.stopTimer}>stop</button> :
            null
        let reset = (this.state.time !== 0 && !this.state.isOn) ?
            <button onClick={this.resetTimer}>reset</button> :
            null
        let resume = (this.state.time !== 0 && !this.state.isOn) ?
            <button onClick={this.startTimer}>resume</button> :
            null
        return (
            <div>
                <h3>{this.state.time}</h3>
                {/* {start}
                {resume}
                {stop}
                {reset} */}
            </div>
        )
    }
}