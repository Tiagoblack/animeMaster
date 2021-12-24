import React from 'react'
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabBottom = createBottomTabNavigator()

import Home from '../page/Home';
import Search from '../page/Search';
import Profile from '../page/Profile';
import CustomTabBar from '../components/CustomTabBar';
import Favorites from '../page/Favorites';




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
        <TabBottom.Screen name='Favorites' component={Favorites}/>
        <TabBottom.Screen name='Profile' component={Profile}/>
    </TabBottom.Navigator>
);
export default HomeTab
