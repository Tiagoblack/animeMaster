import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex:1;
`;

export const Input = styled.TextInput`
    flex:1;
    color:#fff;
`;


export const ContentAnime = styled.ScrollView`
    width:100%;    
    flex:1;
    z-index:1000
    margin-top:20px;
    flex-direction:row;
`;
    
export const ButtonSearch = styled.View`
    width:100%;
    height : 60px;
    background-color:#000;
    border-radius:30px;
    padding:10px;
    font-family:'sans-serif';
    color:#eee
    flex-direction:row;
`;
    
export const ContainerIcon = styled.TouchableOpacity`
    height:100%;
    width:50px;
    justify-content:center;
    align-items:center;
`;

