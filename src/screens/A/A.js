//@flow
import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles.js';
import {useFetch} from '../../res/utils';
import ListItem from '../../components/ListItem';
import ErrorMessage from '../../components/ErrorMessage';
import ListHeader from '../../components/ListHeader/ListHeader';

type Props = {
  navigation: Object,
};

function A(props: Props) {
  //TRY DELETE ONE SYMBOL IN URL TO SEE ERROR HANDLING
  const {response, error, isLoading} = useFetch(
    'https://hacker-news.firebaseio.com/v0/topstories.json',
    {},
  );

  const navigateToDetails = (params: Object) => {
    const {navigation} = props;
    navigation.navigate('B', params);
  };

  const renderError = () => <ErrorMessage message={error.message} />;
  let currentPage = 0;
  const onScrollEnd = e => {
    let contentOffset = e.nativeEvent.contentOffset;
    let viewSize = e.nativeEvent.layoutMeasurement;
    currentPage = Math.floor(contentOffset.x / viewSize.width);
  };
  const renderList = () => {
    return (
      <FlatList
        data={response}
        refreshing={isLoading}
        initialNumToRender={3}
        onMomentumScrollEnd={onScrollEnd}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onRefresh={() => {}}
        keyExtractor={(item: number, index: number) => index.toString()}
        renderItem={({item}: number, index: number) => {
          const canBeFetched = response[currentPage] === item;
          return (
            <ListItem
              storyId={item}
              key={index}
              canBeFetched={canBeFetched}
              onPress={() => navigateToDetails({id: item})}
            />
          );
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <ListHeader />
      {error ? renderError() : renderList()}
    </View>
  );
}
export default React.memo(A);
