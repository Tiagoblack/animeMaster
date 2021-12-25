import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';

const Container = styled.TouchableOpacity`
    height:100px;
    width:150px;
    background-color:red;
    margin:10px;
    border-radius:30px;
    justify-content:center;
    align-items:center;
    background-color:#434343;
`;

const TextGenre = styled.Text`
    font-size:16px;
    font-weight:bold;
    text-transform:uppercase;
    color:#fff;


`;


const ListGenre = ({data, index}) => {

    const [genre, setGenre] = useState([])

    const navigation = useNavigation();
    const hadleClickGenre = async() =>{
        let req = await fetch(`https://api.jikan.moe/v3/genre/anime/${index + 1}/1`);
        let res = await req.json();
        navigation.navigate('TabGenre', {res, data});
    }
    
    return (
       <Container
            onPress={hadleClickGenre}
            style={{elevation:10, shadowColor:'#eee'}}
       >
           <TextGenre>{data}</TextGenre>
       </Container> 
    )
}

export default ListGenre

