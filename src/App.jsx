import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import {inject, observer} from 'mobx-react';
import AppStyle from './styles/app.style.js';
import './styles/app.scss';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

import Paper from 'material-ui/Paper';
import IconNews from 'material-ui/svg-icons/action/language';
import IconHome from 'material-ui/svg-icons/navigation/apps';
import IconFilter from 'material-ui/svg-icons/image/crop-free';
const Router = require('react-router');
import AjaxLoader from './modules/shared/ajaxLoader';

@inject('appState')
@observer
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
      <div className="container" style={AppStyle.container}>
        <Paper style={AppStyle.header} >
         <h3>News Reader - Matan & Ofer</h3>
        </Paper>
        <div style={AppStyle.body}>
        {
          this.props.appState.isLoading
          ? <AjaxLoader />
          : this.props.children
        }
        {}
        </div>
         <BottomNavigation style={AppStyle.footer} selectedIndex={this.getSelectedIndex(currentLocation)}>
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

    );
  }
};

export default App;
