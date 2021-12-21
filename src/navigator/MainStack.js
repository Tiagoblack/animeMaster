import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

const stacks = createStackNavigator();

import Preload from "../page/Preload";
import SingUp from "../page/SingUp";
import SingIn from "../page/SingIn";


export default () =>(
    <stacks.Navigator>
        <stacks.Screen name="preload" component={Preload}/>
        <stacks.Screen name="preload" component={SingUp}/>
        <stacks.Screen name="preload" component={SingIn}/>
    </stacks.Navigator>
);