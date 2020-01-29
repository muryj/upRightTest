import {StyleSheet, Dimensions} from 'react-native';
const SCREEN_WIDTH = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: SCREEN_WIDTH,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 50,
    marginBottom: 10,
  },
  storyTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: '700',
  },
  idText: {
    fontSize: 20,
  },
  activityIndicator: {
    marginTop: 10,
  },
});
