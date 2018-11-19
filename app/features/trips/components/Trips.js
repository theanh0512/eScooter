import React from 'react';
import { Text, View } from 'react-native';
import NavigationBar from 'app/components/NavigationBar';

export default class Trips extends React.Component {
  render() {
    return (
      <View>
        <Text> hello </Text>
      </View>
    );
  }
}

Trips.navigationOptions = {
  header: ({ navigation }) => (
    <NavigationBar
      navigation={navigation}
      navigationTitle={"TRIPS"}
      grey
    />
  )
};
