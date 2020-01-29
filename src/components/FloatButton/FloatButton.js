//@flow
import React from 'react';
import {TouchableOpacity, Text, Linking} from 'react-native';
import styles from './styles.js';

type Props = {
  url: string,
};
function FloatButton(props: Props) {
  const {url} = props;
  const openUrl = () => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url);
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('An error occurred', err));
  };
  return (
    <TouchableOpacity onPress={() => openUrl()} style={styles.container}>
      <Text style={styles.floatText}>Open in</Text>
      <Text style={styles.floatText}>Browser</Text>
    </TouchableOpacity>
  );
}
export default React.memo(FloatButton);
