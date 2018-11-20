import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { MapView } from 'expo';
import MenuIconHome from 'app/resources/svg/menu-icon-home';
import { SemiBoldText } from 'app/components/CustomTexts';
import styles from 'app/components/styles/MapMarker.style';
import Colors from 'app/common/Colors';

class MapMarker extends React.Component {
  render() {
    const { coordinate, title, description, markerText } = this.props;
    return (
      <MapView.Marker
        style={styles.marker}
        coordinate={coordinate}
        title={title}
        description={description}
        tracksViewChanges={false}
      >
        <View style={styles.container}>
          <MenuIconHome/>
          <SemiBoldText
            fontSize={18}
            style={[
              styles.overlayText,
              {
                color: Colors.black
              }
            ]}
            text={markerText}
          />
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
  markerText: PropTypes.string
};

module.exports = MapMarker;
