import React from 'react';
import { Dimensions, View } from 'react-native';
import NavigationBar from 'app/components/NavigationBar';
import { connect } from 'react-redux';
import { getScooters } from '../actions/ScooterListAction';
import ScootersMapView from 'app/components/ScootersMapView';
import Colors from 'app/common/Colors';
import _ from 'lodash';

const { height } = Dimensions.get('window');

export default class Main extends React.Component {
  componentDidMount() {
    this.props.getScooters();
  }

  render() {
    const { scooters } = this.props;
    const markers = scooters.map(scooter => (
      {
        markerText: scooter.baterry.toString(),
        title: scooter.serialCode.toString(),
        description: scooter.serialCode.toString(),
        coordinate: {
          latitude: parseFloat(scooter.latitude),
          longitude: parseFloat(scooter.longitude)
        }
      })
    );

    return (
      <View>
        <ScootersMapView
          style={{
            height: height,
            backgroundColor: Colors.grey,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          region={_.head(markers).coordinate}
          markers={markers}
        />
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
