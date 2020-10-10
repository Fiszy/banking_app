/**
 * @format
 */

import {AppRegistry} from 'react-native';

import App from './App';
import MyApp from './src/app';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/UI/pages/Home';

class BankApp extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    render() {

        return (
            <PaperProvider>
                <NavigationContainer>
                    <MyApp/>
                </NavigationContainer>
            </PaperProvider>


        );
    }
}

AppRegistry.registerComponent(appName, () => BankApp);
