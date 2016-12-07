import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import './app.scss';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import IconNews from 'material-ui/svg-icons/action/language';
import IconHome from 'material-ui/svg-icons/navigation/apps';
import IconFilter from 'material-ui/svg-icons/image/crop-free';
const Router = require('react-router');


class App extends Component {
  
  constructor(props) {
    super(props);
    this.navigationItemSelected = this.navigationItemSelected.bind(this);
    this.getSelectedIndex = this.getSelectedIndex.bind(this);
  }

  navigationItemSelected(path) {
    Router.browserHistory.push(`/${path}`);
  }

  getSelectedIndex(location) {
    switch(location) {
      case "/" : return 0;
      case "/news" : return 1;
      case "/filter" : return 2;
    }
    return 3;
  }

  render() {
    
    var currentLocation = this.props.location.pathname
    return (
      <div className="container">
        <div className="header">
          <h1>Hello</h1>
        </div>
        <div className="body">
        {this.props.children}
        </div>
        <div className="footer">
         <BottomNavigation selectedIndex={this.getSelectedIndex(currentLocation)}>
          <BottomNavigationItem
            label="Home"
            icon={<IconHome />}
            onClick={() => this.navigationItemSelected('')}
          />
          <BottomNavigationItem
            label="News"
            icon={<IconNews />}
            onClick={() => this.navigationItemSelected('news')}
          />
          <BottomNavigationItem
            label="Filter"
            icon={<IconFilter />}
            onClick={() => this.navigationItemSelected('filter')}
          />
        </BottomNavigation>
        </div>
      </div>

    );
  }
};

export default App;
