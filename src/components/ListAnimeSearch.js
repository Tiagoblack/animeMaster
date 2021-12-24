import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native';



const Container = styled.TouchableOpacity`
    background-color:red;
    height:200px;
    width:150px;
    z-index:9999


`;
const TitleAnime = styled.Text`
    color:#fff;
`;
const ImageAnime = styled.Image`
    background-color:green;
`;

const ListAnimeSearch = ({data}) => {
    return (
        <Container>
            <ImageAnime
                source={{uri:data.image_url}}
                resizeMode="cover"
            />
            <TitleAnime>{data.title}</TitleAnime>
            <Text>lsdmsknkdsnçsad,asç</Text>
        </Container>
    )
}

export default ListAnimeSearch

const styles = StyleSheet.create({})
