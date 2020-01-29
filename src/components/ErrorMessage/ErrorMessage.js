//@flow
import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.js';

type Props = {
  message: string,
};
function ListItem(props: Props) {
  const {message} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
}
export default React.memo(ListItem);
