import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useTheme, Portal, FAB, Appbar} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import {useSafeArea} from 'react-native-safe-area-context';

import {colors} from '../../src/styles/misc/settings';
import IconFeather from 'react-native-vector-icons/Feather';
import {createStackNavigator} from '@react-navigation/stack';
import Savings from './pages/Savings';
import Graph from './pages/Graph';
import Details from './pages/Details';
import Home from './pages/Home';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="AppHome"
        component={Home}
        options={{title: 'Home', headerShown: false}}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{title: '', headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export const BottomTabs = () => {
  const isFocused = useIsFocused();
  const safeArea = useSafeArea();

  const tabBarColor = colors.primary;

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Dashboard"
        backBehavior="initialRoute"
        shifting={false}
        inactiveTintColor={colors.gray200}
        barStyle={{backgroundColor: colors.primary}}>
        <Tab.Screen
          name="Dashboard"
          component={HomeStack}
          options={{
            tabBarIcon: ({color}) => (
              <IconFeather name="home" color={color} size={26} />
            ),
          }}
        />
          <Tab.Screen
              name="Graph"
              component={Graph}
              options={{
                  tabBarIcon: ({color}) => (
                      <IconFeather name="activity" color={color} size={26} />
                  ),
                  tabBarColor: colors.primary,
              }}
          />
        <Tab.Screen
          name="Savings"
          component={Savings}
          options={{
            tabBarIcon: ({color}) => (
              <IconFeather name="upload" color={color} size={26} />
            ),
          }}
        />

      </Tab.Navigator>

    </React.Fragment>
  );
};
