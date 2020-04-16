import React, { Component } from 'react';
import MathPage from './MathPage.jsx'
import '../App.css';
import Background from './Background.jsx';
import Timer from './Timer'

function importAll(r) {
  return r.keys().map(r);
}

const randomImages = importAll(require.context('../utils/assets/', false, /\.(png|jpe?g|svg)$/));

class App extends Component {
  render() {
    let url = `url(${randomImages[Math.floor(Math.random() * randomImages.length)]})`
    const styles = {
      padding: '50px',
      backgroundImage: url,
    }

    return (
      <div style={styles}>
        <h1>Math test</h1>
        <Timer></Timer>
        <MathPage left="0px" />
      </div>
    );
  }

}

export default App;
