import { Dimensions } from 'react-native';
import DrawerMenu from 'app/components/DrawerMenu';
import { MainNavigation } from 'app/routes/MainNavigationRouteSetup';
import { TripsNavigation } from 'app/routes/TripsNavigationRouteSetup';

const { width } = Dimensions.get('window');

export const routeKeys = {
  Main: "Main",
  Trips: "Trips"
};

export const navigationConfig = {
  drawerWidth: width * 0.86,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentComponent: DrawerMenu,
  initialRouteName: routeKeys.Main
};

export const mapRouteKeysToScreen = {
  [`${routeKeys.Main}`]: {
    screen: MainNavigation
  },
  [`${routeKeys.Trips}`]: {
    screen: TripsNavigation
  }
};
