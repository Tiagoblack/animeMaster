import { Animated } from "react-native";
import styled from "styled-components/native";


export const Container = styled.View`
    flex:1;

`;

export const ContainerProfile = styled(Animated.View)`
    height:200px;
    width:100%;
    justify-content:center;
    align-items:center;
    background-color:#434343;
    border-bottom-left-radius:30px;
    border-bottom-right-radius:30px;
`;


export const  ImageProfile = styled.Image`
    height:100%;
    width:100%;
    border-radius:100px;

`;

export const TextName = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:20px

`;

export const TextWecome = styled(Animated.Text)`
    margin-top:10px;
    color:#fff;
    font-size:16px;
    width:400px;

`;



export const ContainerImageProfile = styled(Animated.View)`
    height:170px;
    width:170px;
    border-radius:100px;

`;

export const BagdeProfile = styled.Text`
   font-size: 30px;
   color:#fff;
   overflow:hidden;
`;
    
export const ContainerBagde = styled.TouchableOpacity`
    height:50px;
    width:50px;
    background-color:red;
    position:absolute;
    right:0px;
    bottom:0px;
    justify-content:center;
    align-items:center;
    border-radius: 25px;
    background-color:#333
    border-width:5px;
    border-color:#ffff
    z-index:1111;
`;

export const ImageProfileMedia = styled.Image`
    height:170px;
    width:170px;
    border-radius:100px;
`;


export const ContentProfile = styled.View`
    flex:1;
    width:100%;
    padding:30px 20px;
   
`;


export const Input = styled.TextInput`
    height:50px;
    border-radius:30px;
    width:100%;
    background-color:#434343;
    margin-bottom:10px;
    color:#fff;
    padding:0px 10px;
`;

export const ButtonEdit = styled.TouchableOpacity`
    width:100%;
    height0px;
    justify-content:center;
    align-items:center;
    margin-top: 20px;
    border-radius:20px;
    background-color:#434343;
    padding:5px 12px;
`;
export const ButtonEditText = styled.Text`
    color:#fff;
    text-transform:uppercase;
    font-weight:bold;
    font-size:20px;
    letter-spacing:3px;
`;