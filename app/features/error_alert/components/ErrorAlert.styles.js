import Colors from 'app/common/Colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.errorRed,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  content: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16
  },
  textStyle: {
    color: Colors.white,
    lineHeight: 20
  },
  title: {
    marginLeft: 16,
    marginRight: 16,
    marginTop: 16,
    lineHeight: 20
  },
  description: {
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 16,
    lineHeight: 20
  }
});
