//@flow
import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import styles from './styles.js';
import {useFetch} from '../../res/utils';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import StoryTitle from '../../components/StoryTitle';
import FloatButton from '../../components/FloatButton';
import {colors} from '../../res/utils';

type Props = {
  navigation: Object,
};

function B(props: Props) {
  const {navigation} = props;
  const {response, error, isLoading} = useFetch(
    `https://hacker-news.firebaseio.com/v0/item/${navigation.getParam(
      'id',
    )}.json`,
    {},
  );
  const renderError = () => <ErrorMessage message={error.message} />;
  const renderStory = () => {
    if (isLoading) {
      return (
        <ActivityIndicator
          size="small"
          color={colors.grey}
          style={styles.activityIndicator}
        />
      );
    }
    if (response) {
      const {title, url, by, time} = response;
      return (
        <View style={styles.webViewContainer}>
          <FloatButton url={url} />
          <StoryTitle title={title} date={time} author={by} />
          <WebView source={{uri: url}} />
        </View>
      );
    }
  };
  return (
    <View style={styles.container}>
      {error ? renderError() : renderStory()}
    </View>
  );
}
export default React.memo(B);
