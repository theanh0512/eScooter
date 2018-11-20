import React from 'react';
import { MapView } from 'expo';
import PropTypes from 'prop-types';
import MapMarker from 'app/components/MapMarker';
import Colors from 'app/common/Colors';

class ScootersMapView extends React.Component {
  constructor(props) {
    super(props);

    this.mapRef = null;
    this.coordinates = props.markers.map(marker => marker.coordinate);
  }

  render() {
    const { region, style, markers } = this.props;
    return (
      <MapView
        ref={ref => {
          this.mapRef = ref;
        }}
        style={style}
        provider={MapView.PROVIDER_GOOGLE}
        // When only 1 marker, center on that marker
        initialRegion={
          markers.length <= 1
            ? { ...region, latitudeDelta: 0.04, longitudeDelta: 0.02 }
            : undefined
        }
        // When more than 1 marker, fit markers to map
        // See https://github.com/react-community/react-native-maps/issues/1003
        onLayout={() => {
          if (markers.length > 1) {
            this.mapRef.fitToCoordinates(this.coordinates, {
              edgePadding: { top: 80, right: 40, bottom: 40, left: 40 },
              animated: false
            });
          }
        }}
        customMapStyle={[
          {
            elementType: 'geometry',
            stylers: [
              {
                color: '#f5f5f5'
              }
            ]
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161'
              }
            ]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#f5f5f5'
              }
            ]
          },
          {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#bdbdbd'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [
              {
                color: '#eeeeee'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e5e5e5'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              {
                color: '#ffffff'
              }
            ]
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#dadada'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161'
              }
            ]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e'
              }
            ]
          },
          {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [
              {
                color: '#e5e5e5'
              }
            ]
          },
          {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [
              {
                color: '#eeeeee'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#c9c9c9'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e'
              }
            ]
          }
        ]}
        zoomEnabled={true}
        zoomControlEnabled={true}
        scrollEnabled={true}
        rotateEnabled={false}
        pitchEnabled={true}
        loadingEnabled
        loadingBackgroundColor={Colors.white}
      >
        {markers.map((marker, index) => (
          <MapMarker
            key={index.toString()}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
            markerText={marker.markerText}
          />
        ))}
      </MapView>
    );
  }
}

ScootersMapView.propTypes = {
  region: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }).isRequired,
  style: PropTypes.shape({}),
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      coordinate: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired
      }).isRequired,
      title: PropTypes.string,
      description: PropTypes.string,
      markerText: PropTypes.string
    })
  )
};

module.exports = ScootersMapView;
