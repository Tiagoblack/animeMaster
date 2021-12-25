import React, {useState} from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native';



const Container = styled.TouchableOpacity`
    height:200px;
    width:150px;
    z-index:9999
    margin:10px;


`;
const TitleAnime = styled.Text`
    color:#fff;
    font-weight:bold;
    margin:5px;
    text-align:center;
    margin-top: ${props=> props.loading ? '20px': '0px'}
`;
const ImageAnime = styled.Image`
    border-radius:30px;
    background-color:#434343;
    height:100%;
    width:100%;
    display:${props => props.loading ? 'none': 'flex'}    

`;

const ListAnimeSearch = ({data, key}) => {

    const [loading, setLoading] = useState(true);

return (
        <Container
            key={key}        
        >

            {loading &&
                <ActivityIndicator 
                    color="#fff"   
                    size={30}
                />
            }   
            <ImageAnime
                onLoadEnd={()=>setLoading(false)}
                source={{uri:data.image_url}} 
                resizeMode="cover" 
                loading={loading}
            />
            <TitleAnime numberOfLines={2}>{data.title}</TitleAnime>
        </Container>
    )
}

export default ListAnimeSearch

const styles = StyleSheet.create({})
