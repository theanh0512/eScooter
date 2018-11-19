import React from 'react';
import { Text, View } from 'react-native';
import NavigationBar from 'app/components/NavigationBar';

export default class Main extends React.Component {
  render() {
    return (
      <View>
        <Text> hello </Text>
      </View>
    );
  }
}

Main.navigationOptions = {
  header: ({ navigation }) => (
    <NavigationBar
      navigation={navigation}
      navigationTitle={"MAP"}
      grey
    />
  )
};
