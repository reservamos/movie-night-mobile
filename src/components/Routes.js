import { createAppContainer, createStackNavigator } from 'react-navigation';
import MainScreen from 'components/MainScreen';
import MovieDetails from 'components/MovieDetails';

const stackNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
    },
    MovieDetails: {
      screen: MovieDetails,
      headerMode: 'none',
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'MainScreen',
  },
);

export default createAppContainer(stackNavigator);
