import { createStackNavigator } from 'react-navigation';
import Main from 'app/features/map/components/Main';

const mainNavigationRouteKeys = {
  Main: 'Main'
};

const routeConfig = {
  [`${mainNavigationRouteKeys.Main}`]: {
    screen: Main
  }
};

const mainNavigationConfig = {
  initialRouteName: `${mainNavigationRouteKeys.Main}`,
  mode: 'card',
  headerMode: 'screen'
};

const MainNavigation = createStackNavigator(
  routeConfig,
  mainNavigationConfig
);

module.exports = { MainNavigation };
