import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { MapView } from 'expo';
import SvgIconfinderBatteryAlmost from 'app/resources/svg/iconfinder_battery_almost';
import SvgIconfinderBatteryLow from 'app/resources/svg/iconfinder_battery_low';
import SvgIconfinderBatteryMedium from 'app/resources/svg/iconfinder_battery_3_medium';
import ScooterIcon from 'app/resources/svg/ic-scooter';
import { SemiBoldText } from 'app/components/CustomTexts';
import styles from 'app/components/styles/MapMarker.style';
import Colors from 'app/common/Colors';

class MapMarker extends React.Component {
  render() {
    const { coordinate, title, description, batteryLevel } = this.props;
    let batteryIcon = <SvgIconfinderBatteryAlmost/>;
    if (batteryLevel > 70) {
      batteryIcon = <SvgIconfinderBatteryAlmost/>;
    }
    else if (batteryLevel < 70 && batteryLevel > 40) {
      batteryIcon = <SvgIconfinderBatteryMedium/>;
    }
    else {
      batteryIcon = <SvgIconfinderBatteryLow/>;
    }
    return (
      <MapView.Marker
        style={styles.marker}
        coordinate={coordinate}
        title={title}
        description={description}
        tracksViewChanges={false}
      >
        <View>
          <View>
            <ScooterIcon/>
          </View>
          <View styles={styles.overlayContainer}>
            <SemiBoldText
              fontSize={12}
              style={[styles.overlayText,
                {
                  color: Colors.black
                }
              ]}
              text={`${batteryLevel}%`}
            />
            {batteryIcon}
          </View>

        </View>
      </MapView.Marker>
    );
  }
}

MapMarker.propTypes = {
  coordinate: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }),
  title: PropTypes.string,
  description: PropTypes.string,
  batteryLevel: PropTypes.number
};

module.exports = MapMarker;
