import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    align-items:center;
`;


export const Input = styled.TextInput`
    flex:1;
    color:#fff;
`;



export const ContentContainerAnimation = styled.View`
    flex:1;
    margin-top:20px;
    width:100%;
`;

    
export const ButtonSearch = styled.View`
    width:100%;
    height : 60px;
    background-color:#434343;
    border-radius:30px;
    padding:10px;
    font-family:'sans-serif';
    color:#eee
    flex-direction:row;
    position:absolute;
    left:0;
    top:-3px;
    right:0;
    z-index:3333;
    
`;
    
export const ContainerIcon = styled.TouchableOpacity`
    height:100%;
    width:50px;
    justify-content:center;
    align-items:center;
`;

