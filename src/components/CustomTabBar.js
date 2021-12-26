import React, {useRef, useEffect} from'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import styled from 'styled-components/native';

import { useSelector } from 'react-redux';



import { Entypo, FontAwesome, Ionicons, MaterialIcons} from '@expo/vector-icons';

const Container = styled.View`
    height:70px;
    overflow:hidden;
    width:100%;
    border-top-left-radius:10px;
    border-top-right-radius:20px;
    background-color:#434343;
    margin-top:-20px;
    padding:0px 20px;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
 
`;  


const TabArea = styled.TouchableOpacity`
    height:60px;
    width:60px;
    justify-content:center;
    align-items:center; 
`;
    
    const IconText = styled.Text`
    color:#fff;
    
`;
    
    const ImageProfile = styled.Image`
    height:30px;
    width:30px;
    background-color:red;
    border-radius:30px;

`;


export default({state, descriptors, navigation}) => {

    //const scale = useRef(new Animated.Value(0)).current;



    const handleStackNaviagtion = (stackName)=>{
        navigation.navigate(stackName);
    }
    const {img} = useSelector(state=>state.userReducer)

    return (    
       <Container>
            <TabArea 
                    onPress={()=>handleStackNaviagtion("Home")} 
                    >
                <Entypo 
                    name="home" 
                    size={24} 
                    color="white" 
                    style={{ opacity: state.index === 0? 1: 0.5}}
                />
                <IconText
                    style={{ opacity: state.index === 0? 1: 0.5}}
                >Home</IconText>
            </TabArea>
            <TabArea 
                onPress={()=>handleStackNaviagtion("Search")}
                >
                <FontAwesome 
                    name="search" 
                    size={24} 
                    color="white" 
                    style={{ opacity: state.index === 1? 1: 0.5}}
                />
                   
                <IconText style={{ opacity: state.index === 1? 1: 0.5}}>Search</IconText>
            </TabArea>
            <TabArea 
                onPress={()=>handleStackNaviagtion("Genre")}
                >
                <MaterialIcons 
                name="favorite" 
                size={24} 
                color="white"
                style={{ opacity: state.index === 2? 1: 0.5}}
                />
                <IconText style={{ opacity: state.index === 2? 1: 0.5}}>Genre</IconText>
            </TabArea>
            <TabArea 
                onPress={()=>handleStackNaviagtion("Profile")}
                >
                    {img ==null?
                   <Ionicons 
                        name="person-circle" 
                        size={24} 
                        color="white" 
                        style={{ opacity: state.index === 3? 1: 0.5}}
                    />:
                    <ImageProfile 
                        source={{uri:img}}
                        resizeMode="cover"
                    />
                    }
                <IconText style={{ opacity: state.index === 3? 1: 0.5}}>Profile</IconText>
            </TabArea>
       </Container> 
    )
}


