import { createStackNavigator } from 'react-navigation';
import Trips from 'app/features/trips/components/Trips';

const tripsNavigationRouteKeys = {
  Trips: 'Trips'
};

const routeConfig = {
  [`${tripsNavigationRouteKeys.Trips}`]: {
    screen: Trips
  }
};

const tripsNavigationConfig = {
  initialRouteName: `${tripsNavigationRouteKeys.Trips}`,
  mode: 'card',
  headerMode: 'screen'
};

const TripsNavigation = createStackNavigator(
  routeConfig,
  tripsNavigationConfig
);

module.exports = { TripsNavigation };
