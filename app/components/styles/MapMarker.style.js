import { StyleSheet } from 'react-native';
import Colors from 'app/common/Colors';

export default StyleSheet.create({
  marker: {
    height: 36,
    width: 36
  },
  container: {
    flex: 1
  },
  overlayText: {
    color: Colors.white,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 4,
    bottom: 0,
    textAlign: 'center'
  }
});
