//@flow
import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator, View} from 'react-native';
import styles from './styles.js';
import {colors, useFetch} from '../../res/utils';

type Props = {
  onPress: () => void,
  storyId: number,
  canBeFetched: boolean,
  key: number,
};
function ListItem(props: Props) {
  const {onPress, storyId, key} = props;
  const {response, error, isLoading} = useFetch(
    `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`,
    {},
  );

  // const [response, setResponse] = useState(null);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  //
  // useEffect(() => {
  //   console.log(canBeFetched)
  //   if (canBeFetched) {
  //     const fetchData = async () => {
  //       setIsLoading(true);
  //       try {
  //         const res = await fetch(
  //             `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`,
  //             {},
  //         );
  //         const json = await res.json();
  //         setResponse(json);
  //         setIsLoading(false);
  //       } catch (err) {
  //         setError(err);
  //       }
  //     };
  //     fetchData();
  //   }
  // }, []);

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
      return (
        <View style={styles.storyTextContainer}>
          <Text style={styles.titleText}>Title:</Text>
          <Text style={styles.idText}>{response.title}</Text>
        </View>
      );
    }
  };
  return (
    <TouchableOpacity key={key} onPress={onPress} style={styles.container}>
      {renderStory()}
    </TouchableOpacity>
  );
}
export default React.memo(ListItem);
