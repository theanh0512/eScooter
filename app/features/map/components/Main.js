import React from 'react';
import { Text, View } from 'react-native';
import NavigationBar from 'app/components/NavigationBar';
import { connect } from 'react-redux';
import { getScooters } from '../actions/ScooterListAction';

export default class Main extends React.Component {
  componentDidMount() {
    this.props.getScooters();
  }

  render() {
    const { scooters } = this.props;

    return (
      <View>
        <Text>{scooters.length > 0? scooters[0].serialCode : 'empty'}</Text>
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

const mapStateToProps = state => ({
  loadingScooterList: state.mapReducer.loadingScooterList,
  scooters: state.mapReducer.scooters
});

const mapDispatchToProps = {
  getScooters
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
