//@flow
import React from 'react';
import {View, Image} from 'react-native';
import {images} from '../../res/utils';
import styles from './styles.js';

function ListHeader() {
  return (
    <View style={styles.container}>
      <Image source={images.upright} />
    </View>
  );
}
export default React.memo(ListHeader);
