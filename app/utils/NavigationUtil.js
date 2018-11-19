/*
 * Allows navigating without the navigation prop
 * See: https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 */
import { NavigationActions } from 'react-navigation';

let navigator;

export const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};

export const navigate = (routeName, params) => {
  if (navigator) {
    navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
  }
};
