import React, {useEffect} from 'react';
import { View, Text, StatusBar, } from 'react-native';
import {useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import{ Container, Loading } from './styled';
const Preload = () => {

    const name = useSelector(state=> state.userReducer.name);
    const navigation = useNavigation();
    useEffect(()=>{
        if (!name) {
            navigation.navigate('SingIn');
        }
    },[])

    return (
        <Container>
            <StatusBar barStyle='light-content' backgroundColor="#434343"/>
            <Loading/>
        </Container>
    )
}

export default Preload
