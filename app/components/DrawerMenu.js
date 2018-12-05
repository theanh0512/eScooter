import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { routeKeys } from 'app/routes/NavigationRouteSetup';
import CustomDrawerMenuItem from 'app/components/CustomDrawerMenuItem';
import ScooterIcon from 'app/resources/svg/ic-scooter';
import MenuIconHistory from 'app/resources/svg/menu-icon-history';
import Colors from 'app/common/Colors';
import { BoldText } from "./CustomTexts";

const handleOnItemPress = (navigation, routeKey) => {
  navigation.navigate(routeKey);
};

const getIconForMenuItem = (menuItemKey, isSelected) => {
  const fillColor = isSelected ? null : Colors.greyDark;
  switch (menuItemKey) {
    case routeKeys.Main:
      return <ScooterIcon fillColor={fillColor}/>;
    case routeKeys.Trips:
      return <MenuIconHistory fillColor={fillColor}/>;
    default:
      return null;
  }
};

const DrawerMenu = ({ navigation, items, screenProps, activeItemKey }) => (
  <View style={{}}>
    <View style={{ flexDirection: 'row', height: 64, backgroundColor: Colors.purple }}>
      <View style={{ marginTop: 32, marginLeft: 32 }}>
        <ScooterIcon fillColor={Colors.white}/>
      </View>
      <BoldText text={'eScooter Singapore'} fontSize={21}
                style={{ marginTop: 32, marginLeft: 32, color: Colors.white }}/>
    </View>
    {items.map((menuItem, index) => {
      // Check if selected item to apply correct styling
      const isSelected = index >= 0 && menuItem.key === activeItemKey;

      // For other menu options
      return (
        <CustomDrawerMenuItem
          key={menuItem.key}
          menuItemName={menuItem.routeName}
          focused={isSelected}
          iconImageElement={getIconForMenuItem(menuItem.key, isSelected)}
          onItemPress={() => {
            handleOnItemPress(navigation, menuItem.key);
          }}
        />
      );
    })}
  </View>
);

DrawerMenu.propTypes = {
  activeItemKey: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      routeName: PropTypes.string
    })
  ).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

module.exports = DrawerMenu;
