import React from 'react';


import {
    createStackNavigator, TransitionSpecs,
    HeaderStyleInterpolators, CardStyleInterpolators
} from '@react-navigation/stack';
import {BottomTabs} from '../UI/BottomTabs';
import Home from '../UI/pages/Home';

const Stack = createStackNavigator();

const MyTransitionRight = {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },

                    {
                        scale: next
                            ? next.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 0.9],
                            })
                            : 1,
                    },
                ],
            },
            overlayStyle: {
                opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                }),
            },
        };
    },
}

export const  RootStack = () =>  {

    return (
        <Stack.Navigator
            initialRouteName="home"
            screenOptions={{ gestureEnabled: false }}
        >

            <Stack.Screen
                name="home"
                component={BottomTabs}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}




export default RootStack;

