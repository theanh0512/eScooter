import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';
import { mapRouteKeysToScreen, navigationConfig } from 'app/routes/NavigationRouteSetup';
import { setTopLevelNavigator } from 'app/utils/NavigationUtil';

const AppHomeDrawerNavigation = createDrawerNavigator(
  mapRouteKeysToScreen,
  navigationConfig
);

export default class AppHome extends Component {
  render() {
    return (
      <AppHomeDrawerNavigation
        ref={navigatorRef => {
          setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

//const mapStateToProps = state => ({
//  auth: state.auth
//});
//
//module.exports = connect(mapStateToProps)(AppHome);
