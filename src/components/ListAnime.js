import React, {useEffct, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native';

const Container = styled.View`
    height:200px;
    width:150px;
    margin:5px;
    `;
    const ImageAnime = styled.Image`
    height:100%;
    width:100%;
    border-radius:10px
`;

const NameAnime = styled.Text`
    font-size:16px;
    color:#fff;
    text-align:center;
    margin:5px;
`;


const ListAnime = ({data}) => {
    return (
       <Container>
           <ImageAnime 
                source={{uri: data.image_url}} 
                resizeMode="cover"          
           />
           <NameAnime>{data.title}</NameAnime>
       </Container>
    )
}

export default ListAnime

