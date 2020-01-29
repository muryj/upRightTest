import {StyleSheet} from 'react-native';
import {colors} from '../../res/utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 200,
    padding: 20,
    borderWidth: 3,
    borderColor: colors.red,
    borderRadius: 40,
    marginVertical: 200,
    marginHorizontal: 10,
    backgroundColor: colors.white,
  },
  messageText: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
});
