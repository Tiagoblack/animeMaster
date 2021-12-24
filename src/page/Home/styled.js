import styled from "styled-components/native";
import {Animated} from 'react-native'

//export const Container = styled.SafeAreaView``;
export const Scroller = styled.ScrollView`
    flex:1
`;

export const SwiperContainer = styled.View`
    height:300px;
    width:100%;
    background-color:#ff0000;
    z-index:222;
`;


export const SwiperDot = styled.View`
    background-color:#434343;
    height: 15px;
    width:15px;
    border-radius:15px;
    margin:5px;
    

`;
export const SwiperActive = styled.View`
    background-color:white;
    height: 20px;
    width:20px;
    border-radius:15px;
    margin:5px;


`;

export const AnimeContainer =styled(Animated.View)`
    height:100%;
    width:100%;
    margin-top: -20px;
    padding-bottom: 110px
`;


export const ScrollerTitle = styled.Text`
    font-weight:bold;
    font-size:25px;
    color:#eee;
    padding:10px 0px 10px 20px;
`;
export const ScrollerTop = styled.ScrollView`
    height:100px;
    width:100%;
    padding:10px 0px 10px 15px;

`;
export const ScrollList = styled.ScrollView`
    height:250px;
    width:100%;
    padding:10px 0px 10px 15px;

`;