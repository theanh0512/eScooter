import React from 'react';
import { FlatList, View } from 'react-native';
import NavigationBar from 'app/components/NavigationBar';
import { connect } from 'react-redux';
import { getTrips } from 'app/features/trips/actions/TripAction';
import { RegularText, SemiBoldText } from 'app/components/CustomTexts';
import SeparatorLine from 'app/components/SeparatorLine';
import Colors from 'app/common/Colors';

const cost = duration => (duration * 0.01 / 10).toFixed(2);

export default class Trips extends React.Component {
  componentDidMount() {
    this.props.getTrips();
  }

  renderSeparator = () => <SeparatorLine style={{ marginHorizontal: 16 }}/>;

  renderInnerItem = ({ item, index }) => {
    return (
      <View style={{ margin: 16 }}>
        <SemiBoldText fontSize={16} text={item.tripDate}/>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <SemiBoldText fontSize={16}
                        text={`Duration: ${Math.round(item.tripDuration / 60)} mins`}/>
          <SemiBoldText fontSize={16} text={`Cost: $ ${cost(item.tripDuration)}`}/>
        </View>
        <RegularText fontSize={14} text={`Vehicle ID: ${item.vehicleId}`} style={{ marginTop: 8 }}/>
      </View>
    );
  };

  render() {
    const { trips } = this.props;
    return (
      <View style={{ backgroundColor: Colors.white }}>
        <FlatList
          data={trips}
          renderItem={this.renderInnerItem}
          keyExtractor={(itm, idx) => idx.toString()}
          ItemSeparatorComponent={this.renderSeparator}
        />
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

const mapStateToProps = state => ({
  loadingTrips: state.tripReducer.loadingTrips,
  trips: state.tripReducer.trips
});

const mapDispatchToProps = {
  getTrips
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Trips);

