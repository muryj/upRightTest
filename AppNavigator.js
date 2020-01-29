import {createStackNavigator} from 'react-navigation-stack';
import A from './src/screens/A';
import B from './src/screens/B';

const AppNavigator = createStackNavigator(
  {
    A: A,
    B: B,
  },
  {
    initialRouteName: 'A',
  },
);
export default AppNavigator;
