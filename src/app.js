import React, {Component} from 'react';
import {View, Text} from 'react-native';

// import SplashScreen from 'react-native-splash-screen';
import RootStack from './routing/RootStack';
import NavigationService from './NavigationService';
import {Styles} from './styles/styles';

class MyApp extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <View style={{flex: 1}}>

        <RootStack
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}

export default MyApp;
