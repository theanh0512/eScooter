import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import Colors from 'app/common/Colors';
import { BoldText, RegularText } from 'app/components/CustomTexts';

const style = StyleSheet.create({
  container: {
    paddingTop: 16,
    marginLeft: 16,
    marginRight: 16,
    height: 50
  },
  icon: {
    height: 24,
    width: 24
  },
  menuName: {
    paddingLeft: 16,
    color: Colors.black
  }
});

const CustomDrawerMenuItem = ({
                                menuItemName,
                                iconImageElement,
                                focused,
                                onItemPress
                              }) => (
  <View style={style.container}>
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center' }}
      activeOpacity={0.8}
      onPress={onItemPress}
    >
      {iconImageElement}
      {focused ? (
        <BoldText style={style.menuName} fontSize={16} text={menuItemName}/>
      ) : (
        <RegularText style={style.menuName} fontSize={16} text={menuItemName}/>
      )}
    </TouchableOpacity>
  </View>
);

CustomDrawerMenuItem.propTypes = {
  menuItemName: PropTypes.string.isRequired,
  iconImageElement: PropTypes.element,
  focused: PropTypes.bool,
  onItemPress: PropTypes.func
};

module.exports = CustomDrawerMenuItem;
