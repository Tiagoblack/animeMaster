import React from "react";
import {createStackNavigator} from '@react-navigation/stack';

const stacks = createStackNavigator();

import Preload from "../page/Preload";
import SingUp from "../page/SingUp";
import SingIn from "../page/SingIn";


export default () =>(
    <stacks.Navigator>
        <stacks.Screen name="Preload" component={Preload}/>
        <stacks.Screen name="SingUp" component={SingUp}/>
        <stacks.Screen name="SingIn" component={SingIn}/>
    </stacks.Navigator>
);