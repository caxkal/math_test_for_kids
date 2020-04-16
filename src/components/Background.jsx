import React, { Component } from 'react'
import helloKitty from '../utils/assets/hellokitty.jpg'

export default class Background extends Component {


  render() {
    // we should use camelCase for variable names
    // also, it's better to define styles outside of render method
    return (
      <section style={sectionStyle}>
        <div style={styles.menu} />
      </section>
    );
  }
}

const sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${helloKitty})`
};

const styles = {
  menu: {
    position: 'expand',
    background: '#5555',
    padding: '500px'
  }
};
