import React from 'react'
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabBottom = createBottomTabNavigator()

import Home from '../page/Home';
import Search from '../page/Search';
import Profile from '../page/Profile';
import CustomTabBar from '../components/CustomTabBar';
import Genre from '../page/Genre';
import TabGenre from '../page/TabGenre';




const HomeTab = () => (
    <TabBottom.Navigator
        initialRouteName='home'
        screenOptions={{
            headerShown:false,
        }}    
        tabBar={props=><CustomTabBar {...props}/>}
        
    >
        <TabBottom.Screen name='Home' component={Home}/>
        <TabBottom.Screen name='Search' component={Search}/>
        <TabBottom.Screen name='Genro' component={Genre}/>
        <TabBottom.Screen name='Profile' component={Profile}/>
        <TabBottom.Screen name='TabGenre' component={TabGenre}/>
    </TabBottom.Navigator>
);
export default HomeTab
