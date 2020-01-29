//@flow
import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles.js';
import {utils} from '../../res/utils';

type Props = {
  title: string,
  author: string,
  date: number,
};
function StoryTitle(props: Props) {
  const {title, author, date} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.authorContainer}>
        <Text>by {author}</Text>
        <Text>on {utils.formatTime(date)}</Text>
      </View>
    </View>
  );
}
export default React.memo(StoryTitle);
