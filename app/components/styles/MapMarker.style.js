import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  marker: {
    height: 45,
    width: 45
  },
  container: {
    flex: 1
  },
  overlayText: {
    position: 'absolute',
    left: -1,
    right: 0,
    bottom: 24
  },
  overlayContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -2,
    bottom: 0
  }
});
