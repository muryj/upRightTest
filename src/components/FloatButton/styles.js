import {StyleSheet} from 'react-native';
import {colors} from '../../res/utils';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    top: 150,
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    padding: 20,
    borderWidth: 3,
    borderColor: colors.red,
    borderRadius: 80,
    backgroundColor: colors.white,
  },
  floatText: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
});
