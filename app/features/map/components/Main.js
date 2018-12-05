import React from 'react';
import _ from 'lodash';
import { Constants, Location, Permissions } from 'expo';
import { ActivityIndicator, Alert, Dimensions, Platform, View } from 'react-native';
import geolib from 'geolib';
import { connect } from 'react-redux';
import NavigationBar from 'app/components/NavigationBar';
import { getScooters } from 'app/features/map/actions/ScooterListAction';
import ScootersMapView from 'app/components/ScootersMapView';
import Colors from 'app/common/Colors';

const { height } = Dimensions.get('window');

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: null,
      errorMessage: null,
    };
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
      Alert.alert(
        'Permission Denied',
        'Permission to access location was denied. Please go to setting to enable Location Access for Expo.',
        [
          {
            text: 'OK', onPress: () => {
            }
          },
        ],
        { cancelable: false }
      )
    }
    else {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
    }
  };

  componentDidMount() {
    this.props.getScooters();
  }

  render() {
    const { scooters } = this.props;
    const { location } = this.state;
    let markers = [];
    if (location) {
      markers = scooters.map(scooter => (
        {
          batteryLevel: scooter.baterry,
          title: `Serial Code: ${scooter.serialCode.toString()}`,
          description: `Distance from you: ${geolib.getDistanceSimple({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          }, {
            latitude: parseFloat(scooter.latitude),
            longitude: parseFloat(scooter.longitude)
          }).toString()} meters`,
          coordinate: {
            latitude: parseFloat(scooter.latitude),
            longitude: parseFloat(scooter.longitude)
          }
        })
      );
    }

    return _.isEmpty(markers) ? <ActivityIndicator/> :
      (
        <View>
          <ScootersMapView
            style={{
              height: height,
              backgroundColor: Colors.grey,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            region={location ? {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude
            } : null}
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
