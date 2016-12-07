import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Hellp</h1>
        </div>
        {this.props.children}
      </div>

    );
  }
};

export default App;
