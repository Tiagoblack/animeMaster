import React,{useState} from 'react'
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import styled from 'styled-components/native';


const Container = styled.TouchableOpacity`
    height:200px;
    width:150px;
    margin:15px;
    justify-content:center;
    align-items:center;
`;
    
const ImageGenre = styled.Image`
    height:200px;
    border-radius:10px
    width:100%;
    display:${props => props.loading ? 'none': 'flex'}    
`;
    
const TextTitle = styled.Text`
    color:#fff;
    font-weight:bold;
    text-align:center;
    margin-bottom:10px;
    margin-top: ${props=> props.loading ? '20px': '0px'}
`;





const ListGenreCategories = ({data}) => {


    const [loading, setLoading] = useState(true);
    return (
        <Container>
            {loading &&
                <ActivityIndicator 
                    color="#fff"   
                    size={30}
                />
            }
                <ImageGenre
                    onLoadEnd={()=>setLoading(false)}
                    source={{uri:data.image_url}} 
                    style={{}}
                    resizeMode="cover" 
                    loading={loading}
                />
        
            <TextTitle loading={loading} numberOfLines={2}>{data.title}</TextTitle>
            
        </Container>
    )
}

export default ListGenreCategories

