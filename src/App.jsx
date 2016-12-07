import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
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
