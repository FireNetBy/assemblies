import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import Landing from './application/components/Landing';
import Register from './application/components/accounts/Register';
import Login from './application/components/accounts/Login';
import Dashboard from './application/components/Dashboard';
import { globals } from './application/styles';

class assembliesTutorial extends Component {
  constructor(){
    super();
    this.updateUser = this.updateUser.bind(this);
    this.state = {
      user: null
    }
  }
  render() {
    return (
      <Navigator
        style={globals.flex}
        initialRoute={{ name: 'Landing' }}
        renderScene={(route, navigator) => {
          switch(route.name){
            case 'Landing':
              return (
                <Landing navigator={navigator}/>
            );
            case 'Dashboard':
              return (
                <Dashboard navigator={navigator}/>
            );
            case 'Register':
              return (
                <Register navigator={navigator}/>
            );
            case 'Login':
              return (
                <Login
                  navigator={navigator}
                  user={this.state.user}
                  updateUser={this.updateUser}
                />
            );
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('assembliesTutorial', () => assembliesTutorial);
