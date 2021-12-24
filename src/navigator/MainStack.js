import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

const stacks = createStackNavigator();

import Preload from "../page/Preload";
import SingUp from "../page/SingUp";
import SingIn from "../page/SingIn";


import {AppLoading} from 'expo'
import {useFonts, Roboto_700Bold, Roboto_400Regular
} from '@expo-google-fonts/roboto';
import HomeTab from "./HomeTab";


export default () =>(
    <stacks.Navigator
        screenOptions={{
            headerShown:false,
            gestureEnabled:false
        }}    
    >
        <stacks.Screen name="Preload" component={Preload}/>        
        <stacks.Screen name="SingUp" component={SingUp}/>
        <stacks.Screen name="SingIn" component={SingIn}/>
        <stacks.Screen name="HomeTab" component={HomeTab}/>
    </stacks.Navigator>
);